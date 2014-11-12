//*****************************************************************************
//
// blinky.c - Simple CMSIS example to blink the on-board LED of the
//            LM3S6965 Stellaris evaluation board.
//
// Copyright (c) 2009 Luminary Micro, Inc.  All rights reserved.
// Software License Agreement
// 
// Luminary Micro, Inc. (LMI) is supplying this software for use solely and
// exclusively on LMI's microcontroller products.
// 
// The software is owned by LMI and/or its suppliers, and is protected under
// applicable copyright laws.  All rights are reserved.  You may not combine
// this software with "viral" open-source software in order to form a larger
// program.  Any use in violation of the foregoing restrictions may subject
// the user to criminal sanctions under applicable laws, as well as to civil
// liability for the breach of the terms and conditions of this license.
// 
// THIS SOFTWARE IS PROVIDED "AS IS".  NO WARRANTIES, WHETHER EXPRESS, IMPLIED
// OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE APPLY TO THIS SOFTWARE.
// LMI SHALL NOT, IN ANY CIRCUMSTANCES, BE LIABLE FOR SPECIAL, INCIDENTAL, OR
// CONSEQUENTIAL DAMAGES, FOR ANY REASON WHATSOEVER.
// 
// This is part of revision 32 of the Stellaris CMSIS Package.
//
//*****************************************************************************

#include "lm3s/lm3s_cmsis.h"

//*****************************************************************************
//
//! \addtogroup example_list
//! <h1>Blinky (blinky)</h1>
//!
//! A very simple example that blinks the on-board LED, using SysTick
//! for the timing.
//
//*****************************************************************************

//*****************************************************************************
//
// SysTick handler
//
// The SysTick handler is called whenever the SysTick interrupt occurs.
// This handler toggles the state of the GPIO pin attached to the board LED,
// causing it to turn on and off.
//
//*****************************************************************************
void
SysTick_Handler(void)
{
    unsigned char bit;

    //
    // Read the current state of the output.
    // The use of the GPIO pin mask array subscript is the way to
    // access only specific bits of the GPIO port.
    //
    bit = GPIOF->DATA_Bits[0x01];  // selects bit 0

    //
    // Toggle the state of the bit (bit 0)
    //
    bit ^= 0x01;

    //
    // Set the GPIO output pin to the new state.  Again, using the
    // pin mask subscript insures that only the bit of interest
    // is affected by the write.
    //
    GPIOF->DATA_Bits[0x01] = bit;
}

//*****************************************************************************
//
// A simple application that sets up SysTick to generate a periodic
// interrupts, which is then used to blink the LED.
//
//*****************************************************************************
int
main(void)
{
    //
    // Initializes the system clocking, which is configured by the header
    // file lm3s_config.h.
    //
    SystemInit();

    //
    // Enable the GPIO port (F) that is used for the on-board LED.
    //
    SYSCTL->RCGC2 |= 0x20;

    //
    // Delay a few cycles after enabling the peripheral.
    //
    __NOP();

    //
    // Enable the GPIO pin for the LED (PF0).  Set the direction as output, and
    // enable the GPIO pin for digital function.
    //
    GPIOF->DIR = 0x01;
    GPIOF->DEN = 0x01;

    //
    // Set the initial state of the LED off (port bit 0).
    //
    GPIOF->DATA_Bits[0x01] = 0;

    //
    // Configure SysTick to generate a tick 2 times per second
    //
    SysTick_Config(SystemFrequency / 2);

    //
    // Loop forever.
    //
    while(1)
    {
    }
}
