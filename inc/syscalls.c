#include <string.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/times.h>
#include <sys/stat.h>

enum {
    UART_FR_RXFE = 0x10,
    UART_FR_TXFF = 0x20,

    UART0_ADDR = 0x4000C000,
    UART1_ADDR = 0x4000D000,
    UART2_ADDR = 0x4000E000,
};

#define UART_DR(baseaddr) (*(volatile unsigned int*)(baseaddr))
#define UART_FR(baseaddr) (*(((volatile unsigned int*)(baseaddr)) + 6))
#define UART_LCR(baseaddr) (*(((volatile unsigned int*)(baseaddr)) + 11))

int _close(int file)
{
    (void)file;
    return 0;
}

void _exit(int code)
{
    (void)code;
    char buf[33];
    sprintf(buf,"%d\n",code);
    write(99, buf, strlen(buf));
    while (1) {
      continue;
    }
}

void _kill(int code)
{
    (void)code;
    char buf[33];
    sprintf(buf,"%d\n",code);
    write(99, buf, strlen(buf));
    while (1) {
      continue;
    }
}

int _getpid()
{
    return 0;
}

int _fstat(int file, struct stat* st)
{
    (void)file;
    st->st_mode = S_IFCHR;
    return 0;
}

int _isatty(int file)
{
    (void)file;
    return 1;
}

int _lseek(int file, int ptr, int dir)
{
    (void)file;
    (void)ptr;
    (void)dir;
    return 0;
}

int _open(const char* name, int flags, int mode)
{
    (void)name;
    (void)flags;
    (void)mode;
    return -1;
}

int _read(int file, char* ptr, int len)
{
    (void)file;
    (void)ptr;
    (void)len;

    UART_LCR(UART0_ADDR) = UART_FR_RXFE;

    int todo;
    if (len == 0)
        return 0;
    volatile int i = 0;
    while ((UART_FR(UART0_ADDR) & UART_FR_RXFE) && i++ < 4000) {
      continue;
    }
    *ptr++ = UART_DR(UART0_ADDR);
    for (todo = 1; todo < len; todo++) {
        if (UART_FR(UART0_ADDR) & UART_FR_RXFE) {
            break;
        }
        *ptr++ = UART_DR(UART0_ADDR);
    }
    return todo;
}

int _write(int file, char* ptr, int len)
{
    (void)file;

    if (file < 99) {
      return len;
    }

    long uart = (file == 99 ? UART1_ADDR : UART0_ADDR);

    int todo;
    for (todo = 0; todo < len; todo++) {
        UART_DR(uart) = *ptr++;
    }
    return len;
}

// Copyright 2014 Technical Machine, Inc. See the COPYRIGHT
// file at the top-level directory of this distribution.
//
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://www.apache.org/licenses/LICENSE-2.0> or the MIT license
// <LICENSE-MIT or http://opensource.org/licenses/MIT>, at your
// option. This file may not be copied, modified, or distributed
// except according to those terms.

extern unsigned char _heap; // Start of heap defined in linker
extern unsigned char _eheap; // End of heap

static unsigned char* heap = 0;

unsigned char* _sbrk(int size)
{
    if (heap == 0) {
        heap = (unsigned char*)&_heap;
    }

    unsigned char* r = heap;

    // Align to 8-byte boundary
    unsigned char* next = (unsigned char*)(((unsigned int)(heap + size) + 7) & ~7);

    if (next > &_eheap) {
        return 0; // Out of memory
    } else {
        heap = next;
        return r;
    }
}

int _link(void)
{
    return -1;
}

int _unlink(void)
{
    return -1;
}

int _times(struct tms* buf)
{
    (void)buf;
    return -1;
}

int _gettimeofday()
{
    return -1;
}
