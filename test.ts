// テストはここに来ます。このパッケージが拡張機能として使用されるときにはコンパイルされません。
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

