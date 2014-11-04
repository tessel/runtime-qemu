// Copyright 2014 Technical Machine, Inc. See the COPYRIGHT
// file at the top-level directory of this distribution.
//
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://www.apache.org/licenses/LICENSE-2.0> or the MIT license
// <LICENSE-MIT or http://opensource.org/licenses/MIT>, at your
// option. This file may not be copied, modified, or distributed
// except according to those terms.

#include <lua.h>
#include <lauxlib.h>
#include <lualib.h>
// #include <luajit.h>

#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <tm.h>
#include <colony.h>

/** \brief  Enable IRQ Interrupts

  This function enables IRQ interrupts by clearing the I-bit in the CPSR.
  Can only be executed in Privileged modes.
 */
__attribute__( ( always_inline ) ) static inline void __enable_irq(void)
{
  __asm__ volatile ("cpsie i" : : : "memory");
}


/** \brief  Disable IRQ Interrupts

  This function disables IRQ interrupts by setting the I-bit in the CPSR.
  Can only be executed in Privileged modes.
 */
__attribute__( ( always_inline ) ) static inline void __disable_irq(void)
{
  __asm__ volatile ("cpsid i" : : : "memory");
}

/** \brief  Wait For Interrupt

    Wait For Interrupt is a hint instruction that suspends execution
    until one of a number of events occurs.
 */
__attribute__( ( always_inline ) ) static inline void __WFI(void)
{
  __asm__ volatile ("wfi");
}

void tm_events_lock() { __disable_irq(); }
void tm_events_unlock() { __enable_irq(); }

void hw_wait_for_event() {
    __disable_irq();
    if (!tm_events_pending()) {
        // Check for events after disabling interrupts to avoid the race
        // condition where an event comes from an interrupt between check and
        // sleep. Processor still wakes from sleep on interrupt request even
        // when interrupts are disabled.
        __WFI();
    }
    __enable_irq();
}

int tm_entropy_seed() { return 0; }

double tm_timestamp () { return 0; }
int tm_timestamp_update (double millis) { (void) millis; return 0; }

void tm_uptime_init () { }

void tm_log(char level, const char* string, unsigned length) {
    (void) level;
    while (length-- > 0) {
        write(100, string, 1);
        string++;
    }
    write(100, "\n", 1);
}

/*

hw_timer_update_interrupt
tm_log

*/

unsigned char test_lua[] = {
    #include "test.h"
    , 0x00
};


/**
 * Run
 */

tm_fs_ent* tm_fs_root;

int traceback (lua_State *L)
{
  lua_getfield(L, LUA_GLOBALSINDEX, "debug");
  if (!lua_istable(L, -1)) {
    lua_pop(L, 1);
    return 1;
  }
  lua_getfield(L, -1, "traceback");
  if (!lua_isfunction(L, -1)) {
    lua_pop(L, 2);
    return 1;
  }
  // lua_pushinteger(L, 2);   skip this function and traceback 
  lua_call(L, 0, 1);  /* call debug.traceback */
  return 1;
}

void lua_interrupt_hook(lua_State* L, lua_Debug *ar)
{
  (void) ar;
  traceback(L);
  printf("SIGINT %s\n", lua_tostring(L, -1));
  exit(0);
}

void hw_wait_for_event();

const char m3rig_input[4095] = "\0";

#define STMAX 0xFFFFFF
uint32_t* STCTRL = (void*) 0xE000E000 + 0x10;
uint32_t* STRELOAD = (void*) 0xE000E000 + 0x14;
uint32_t* STCURRENT = (void*) 0xE000E000 + 0x18;

uint32_t timercount = 0;

#include "tm.h"

void SysTick_Handler(void) {
  timercount++;
}

uint32_t tm_uptime_micro () {
  return timercount*1e4;
}


void hw_timer_update_interrupt()
{
  if (tm_timer_waiting()) {
    tm_event_trigger(&tm_timer_event);
  }
}

void hirestimer_start(void) {
  *STRELOAD = 0xFFFF;
  *STCTRL = 0x7;
}

uint32_t hirestimer_read(uint32_t start) {
  return (STMAX - *STCURRENT) + STMAX*timercount - start;
}

int main ()
{
  int ret = 0;

  hirestimer_start();

  setvbuf(stdout, NULL, _IOLBF, BUFSIZ);
  setvbuf(stderr, NULL, _IOLBF, BUFSIZ);

  char inputpath[255] = {0};
  int c, idx = 0;
  while ((c = getchar()) != '\n') {
    inputpath[idx++] = c;
  }

  // TODO: load tar ball
  // tm_fs_file_handle ok;
  // tm_fs_ent* dir = tm_fs_dir_create_entry();
  tm_fs_root = tm_fs_dir_create_entry();
  ret = tm_fs_mount_tar(tm_fs_root, ".", test_lua, sizeof(test_lua));
  printf("tm_fs_mount_tar(): %d\n", ret);

  // tm_fs_root = tm_fs_dir_create_entry();
  // tm_fs_file_handle ok;
  // ret = tm_fs_open(&ok, tm_fs_root, "test.js", TM_CREAT);
  // // printf("open(): %s\n", strerror(-ret));
  // ret = tm_fs_write (&ok, test_lua, strlen((const char *) test_lua));
  // // printf("write(): %s\n", strerror(-ret));
  // ret = tm_fs_close(&ok);
  // // printf("close(): %s\n", strerror(-ret));

  colony_runtime_open();
  const char *argv[3] = {"colony", inputpath, NULL};
  ret = tm_runtime_run(argv[1], argv, 2);
  colony_runtime_close();

  // {
  //   tm_fs_dir_t suite;
  //   ret = tm_fs_dir_open(&suite, tm_fs_root, "/suite");
  //   const char* filename = 0;
  //   while (true) {
  //     ret = tm_fs_dir_read(&suite, &filename);
  //     if (filename == NULL) {
  //       break;
  //     }

  //     // get pathname
  //     char pathname[255] = { 0 };
  //     strncat(pathname, "suite/", sizeof(pathname));
  //     strncat(pathname, filename, sizeof(pathname));
  //     // tm_logf(10, "--> %s", pathname);

  //     tm_logf(11, "@@@ %s @@@", pathname);

  //     colony_runtime_open();
  //     // tm_eval_lua()
  //     const char *argv[3] = {"colony", pathname, NULL};
  //     ret = tm_runtime_run(argv[1], argv, 2);
  //     colony_runtime_close();

  //     tm_logf(11, "\n\n\n\n");
  //   }
  //   ret = tm_fs_dir_close(&suite);
  // }

  // colony_runtime_open();
  // // tm_eval_lua()
  // const char *argv[3] = {"colony", "suite/floatint.js", NULL};

  // ret = tm_runtime_run(argv[1], argv, 2);
  
  // tm_logf(10, "\n# terminate.\n\n");
  // return 0;
  
  // colony_runtime_close();

  exit(0);

  return ret;
}
