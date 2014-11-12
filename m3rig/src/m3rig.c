#include <m3rig.h>

#define STMAX 0xFFFFFF
uint32_t* STCTRL = (void*) 0xE000E000 + 0x10;
uint32_t* STRELOAD = (void*) 0xE000E000 + 0x14;
uint32_t* STCURRENT = (void*) 0xE000E000 + 0x18;

uint32_t timercount = 0;

void SysTick_Handler(void) {
  timercount++;
}

uint32_t hirestimer_count(void) {
  return timercount;
}

void hirestimer_start(void) {
  *STRELOAD = 0xFFFF;
  *STCTRL = 0x7;
}

uint32_t hirestimer_read(uint32_t start) {
  return (STMAX - *STCURRENT) + STMAX*timercount - start;
}
