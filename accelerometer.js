// this code writes to the accelerometer
basic.forever(function () {//runs continuously
    pins.i2cWriteNumber(0x19, 2055, NumberFormat.Int8LE)// writes to 0x19
}) 
