#ifndef _M3RIG_
#define _M3RIG_

#include <stdint.h>
#include <lm3s/lm3s_cmsis.h>
#include <core/core_cm3.h>

void hirestimer_start(void);
uint32_t hirestimer_read(uint32_t start);
uint32_t hirestimer_count(void);

#endif
