class Microcontroller {
    constructor(id, name, numDigPins, numAnPins, LED_BUILTIN, I2C, serial, PWM) {
        this.id = id;
        this.name = name;
        this.numDigPins = numDigPins;
        this.numAnPins = numAnPins;
        this.LED_BUILTIN = LED_BUILTIN;
        this.I2C = [];
        this.I2C.SDA = I2C[0];
        this.I2C.SCL = I2C[1];
        this.serial = [];
        this.serial.TX = serial[0];
        this.serial.RX = serial[1];
        this.PWM = PWM;
    }
}

exports.aUno = new Microcontroller('aUno', 'Arduino Uno', 20, 6, '13', ['18','19'], ['1','0'], ['3','5','6','9','10','11']);
exports.aMega = new Microcontroller('aMega', 'Arduino Mega', 54, 16, '13', ['20','21'], ['1','0'], ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','44','45','46']);
exports.aMicro = new Microcontroller('aMicro', 'Arduino Micro', 20, 6, '13', ['2','3'], ['1','0'], ['3','5','6','9','10','11']);
exports.aNano = new Microcontroller('aNano', 'Arduino Nano', 14, 8, '13', ['A4', 'A5'], ['1','0'], ['3','5','6','9','10','11']);