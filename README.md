**[UNMAINTAINED] This library does not have a maintainer. The source code and repository will be kept at this URL indefinitely. If you'd like to help maintain this codebase, create an issue on this repo explaining why you'd like to become a maintainer and tag @tessel/maintainers in the body.**

# runtime-qemu

This is a simple scaffold for running Tessel in an emulated Cortex-M environment in Qemu.

Specifically, it uses the lm3s6965evb environment. Because this doesn't have enough flash (256kb) or memory (64kb) to run the full runtime, you will need to patch `qemu`. This is simple using the [Tessel homebrew tap](https://github.com/tessel/homebrew-tools), or you can [manually patch qemu](https://github.com/tessel/homebrew-tools/blob/master/qemu.rb#L47) for other platforms.

## instructions

Run `make update` then `make client` then `make run` or `make run-debug` (then run `arm-none-eabi-gdb`).

## license

MIT/ASL2.0, at your choice.
