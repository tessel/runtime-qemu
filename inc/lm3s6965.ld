MEMORY {
  rom (rx)  : ORIGIN = 0x00000000, LENGTH = 1024K
  ram (rwx) : ORIGIN = 0x20000000, LENGTH = 1024K
}

STACK_SIZE = 40k;
HEAP_SIZE  = 768K;

EXTERN(_vector_table)
ENTRY(_reset_handler)

SECTIONS {
  .text : {
    *(.vectors)
    . = ALIGN (4);
  } > rom


   .ramtext : {
      . = ALIGN (4);
      _ramtext = .;
      *(.ramtext .ramtext.*)
      *libgcc.a:* (.text .text.*)
      *libc.a:lib_a-mall* (.text .text.*)
      *libc.a:lib_a-free* (.text .text.*)
      *lvm.o (.text .text.*)
      *ldo.o (.text .text.*)
      . = ALIGN (4);
      _eramtext = .;
   } >ram AT>rom
  _ramtext_loadaddr = LOADADDR(.ramtext);


  .text : {
    *(.text .text.* .gnu.linkonce.t.*)
    *(.plt)

    *(.rodata .rodata.* .gnu.linkonce.r.*)

    *(.ARM.extab* .gnu.linkonce.armextab.*)
    *(.gcc_except_table)
    *(.eh_frame_hdr)
    *(.eh_frame)
  } > rom

  .preinit_array : {
    . = ALIGN(4);
    __preinit_array_start = .;
    KEEP (*(.preinit_array))
    __preinit_array_end = .;
  } > rom

  .init_array : {
    . = ALIGN(4);
    __init_array_start = .;
    KEEP (*(SORT(.init_array.*)))
    KEEP (*(.init_array))
    __init_array_end = .;
  } > rom

  .fini_array : {
    . = ALIGN(4);
    __fini_array_start = .;
    KEEP (*(.fini_array))
    KEEP (*(SORT(.fini_array.*)))
    __fini_array_end = .;
  } >rom

  .ARM.exidx : {
    __exidx_start = .;
    *(.ARM.exidx* .gnu.linkonce.armexidx.*)
    __exidx_end = .;
  } >rom

  . = ALIGN(4);
   _etext = .;

  .data : {
    _data  = .;
    _sdata = .;
    *(.data .data.* .gnu.linkonce.d.*)
    . = ALIGN (4);
    _edata = .;
  } >ram AT>rom
  _data_loadaddr = LOADADDR(.data);

  .bss (NOLOAD): {
    . = ALIGN (4);
    _bss = .;
    __bss_start__ = .;
    *(.bss .bss.* .gnu.linkonce.b.*)
    *(COMMON)
    . = ALIGN (4);
    _ebss = .;
    __bss_end__ = .;
  } >ram AT>rom

  .heap (COPY): {
    _heap = .;
    . = . + HEAP_SIZE;
    . = ALIGN(4);
    _eheap = .;
  } >ram

  .stack (COPY): {
    . = _eheap;
    . = ALIGN(8);
    . = . + STACK_SIZE;
    . = ALIGN(4);
    _estack = .;
  } >ram
}
