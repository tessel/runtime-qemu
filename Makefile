.PHONY: test

all: client

client: client-build
	./run.js ./out/Release/main.bin

client-debug: client-build
	./run.js ./out/Release/main.bin -d

update:
	git submodule init
	cd runtime; make update

ENABLE_TLS ?= 0
ENABLE_NET ?= 0

CONFIG ?= Release

ARM ?= 1

compile = \
	AR=arm-none-eabi-ar AR_host=arm-none-eabi-ar AR_target=arm-none-eabi-ar CC=arm-none-eabi-gcc gyp $(1) --depth=. -f ninja-arm -D builtin_section=.rodata -D enable_ssl=$(ENABLE_TLS) -D enable_net=$(ENABLE_NET) -D pwd=$(shell pwd) &&\
	ninja -C out/$(CONFIG)

clean:
	ninja -v -C ../out/Debug -t clean
	ninja -v -C ../out/Release -t clean

client-build:
	cat test.lua | xxd -i > test.h
	$(call compile, qemu.gyp)
	arm-none-eabi-objcopy -O binary out/Release/main out/Release/main.bin
