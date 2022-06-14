## nifty-motor-driver-type2-microbit

> Open this page at [https://healthywalk.github.io/nifty-motor-driver-type2-microbit/](https://healthywalk.github.io/nifty-motor-driver-type2-microbit/)

## Summary
This extension supports the Motor drivers in __micro:bit MakeCode__ programming.  
Many motor driver ICs or their breakouts, including Kitronik motor driver board, can use the extension.  
The extension works drive-brake-mode instead drive-coast-mode, so it is suitable for feedback control applications.  
Motor command values can be positive or negative (-100..100) and they mean forward or backward.

## Methods
* Initialization    (Always run at the beginning)
```
NiftyMotorDriver2.initializeMotorDriver(motor: MotorEnum, pin1: DigitalPin, pin2: DigitalPin)
```
-- Assigns micro:bit pins to the motor driver.  
-- The initialization can be omitted when using the Kitronik motor driver board-5620 / 5698. As well as the Kitronik Extension, the extension assigned pins P8, P12, P0, and P16 as default. 

* drive Motor
```
NiftyMotorDriver2.driveMotor(motor: MotorEnum, sspeed: number)
```
-- Set the speed value to the motor driver.  
-- The range of *sspeed* , that mans signed speeds, is -100 to 100.    
-- If the value is negative, the motor will reverse.

* coast Motor
```
NiftyMotorDriver2.coastMotor(motor: MotorEnum)
```
-- Stop the motor.  
-- This is equivalent to "NiftyMotorDriver2.driveMotor (MotorEnum.m1, 0)".  

* brake Motor
```
NiftyMotorDriver2.brakeMotor(motor: MotorEnum)
```
-- Put the motor in the short brake state.

## Example
```blocks
NiftyMotorDriver2.initializeMotorDriver(MotorEnum.m1, DigitalPin.P8, DigitalPin.P12)
basic.forever(function () {
    NiftyMotorDriver2.driveMotor(MotorEnum.m1, 50)
    basic.pause(2000)
    NiftyMotorDriver2.coastMotor(MotorEnum.m1)
    basic.pause(2000)
    NiftyMotorDriver2.driveMotor(MotorEnum.m1, -50)
    basic.pause(2000)
    NiftyMotorDriver2.brakeMotor(MotorEnum.m1)
    basic.pause(2000)
})
```

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/healthywalk/nifty-motor-driver-microbit** and import

## Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>