file out/Release/main
target remote localhost:1234
break main
display/8i $pc-4
set arm force-mode thumb
b UsageFault_Handler
b *0x0
set history save
cont
