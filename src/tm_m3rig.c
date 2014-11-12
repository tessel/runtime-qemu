#include <m3rig.h>

#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <tm.h>
#include <colony.h>

void tm_events_lock() {
  __disable_irq();
}

void tm_events_unlock() {
  __enable_irq();
}

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

void hw_wait_for_event();

uint32_t tm_uptime_micro () {
  return hirestimer_count()*1e4;
}

void hw_timer_update_interrupt()
{
  if (tm_timer_waiting()) {
    tm_event_trigger(&tm_timer_event);
  }
}

tm_fs_ent* tm_fs_root;
