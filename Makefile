ENABLE_TLS ?= 0
ENABLE_NET ?= 0
ENABLE_LUAJIT ?= 1

CONFIG ?= Release

ARM ?= 1

compile = \
	AR=arm-none-eabi-ar AR_host=arm-none-eabi-ar AR_target=arm-none-eabi-ar CC=arm-none-eabi-gcc CXX=arm-none-eabi-g++ gyp $(1) --depth=. -f ninja-arm -D builtin_section=.rodata -D enable_ssl=$(ENABLE_TLS) -D enable_luajit=$(ENABLE_LUAJIT) -D enable_net=$(ENABLE_NET) -D pwd=$(shell pwd)  &&\
	ninja -C out/$(CONFIG)

.PHONY: client

all: client

clean:
	rm -rf out
	rm test.h
	cd runtime; make clean

client: src/tests.h
	touch runtime/deps/colony-luajit/Makefile
	$(call compile, qemu.gyp)
	arm-none-eabi-objcopy -O binary out/Release/main out/Release/main.bin

src/tests.h:
	$(eval TRY := $(shell mktemp -d 2>/dev/null || mktemp -d -t 'makefile'))
	cp -rf runtime/test $(TRY)
	# cd runtime/test; find . -name "*472.js" -exec bash -c 'colony-compiler "{}" > "$(TRY)/test/{}"' \;
	# cd runtime/test; find . -name "*tap.js" -exec bash -c 'colony-compiler "{}" > "$(TRY)/test/{}"' \;
	# cd runtime/test; find . -name "*truthy.js" -exec bash -c 'colony-compiler "{}" > "$(TRY)/test/{}"' \;
	cd runtime/test; find . -name "*.js" -exec bash -c 'colony-compiler "{}" > "$(TRY)/test/{}"' \;
	(cd $(TRY)/test; tar cvf - .) | xxd -i > src/tests.h

run: client
	@ m3rig ./out/Release/main.bin

run-debug: client
	@ m3rig ./out/Release/main.bin -d

run-debug-verbose: client
	@ m3rig ./out/Release/main.bin -d -v

run-verbose: client
	@ m3rig ./out/Release/main.bin -v

test-all: client
	@ cd runtime/test; tinytap -p4 -e "m3rig ../../out/Release/main.bin {}" suite/*.js issues/*.js -f "suite/{http*,date,dgram,math,net,require,string-decoder,tls,util,zlib}.js"
	@ killall qemu-system-arm > /dev/null 2>&1 || true

update:
	git submodule init
	cd runtime; make update