/*
Pin types: used to determine what pins they're allowed to be inserted in and their logic
Boolean - Analog, Digital - 0 or 1
Int - Analog, Digital - Numeric
Analog - Analog - Numeric
PWM - PWM - 0 to 255
Power - VCC - VCC
Ground - GND - GND
PWRGND - VCC, GND - for hardware Boolean active HIGH/LOW
*/
const VALID_PIN_TYPE = ['bool', 'int', 'analog', 'pwm', 'pwr', 'gnd', 'pwrgnd'];

class Output {
    constructor(id, name, description, power, numPins) {
        this.id = id; //Identifier for site programming
        this.name = name; //Visual name for user
        this.description = description; //Flavor text for user
        this.power = power; //Max voltage tolerance
        this.numPins = numPins;
    }
}

class Output_Bool extends Output {
    constructor(id, name, description, power) {
        super(id, name, description, power, 2); //Keep parent class properties, numPins always 2
        this.pin = [];
        this.pin[0] = 'gnd'; //TODO: do we want to allow active high later?
        this.pin[1] = 'bool'; //Boolean compatible pin
    }
}

class Output_Analog extends Output {
    constructor(id, name, description, power, numPins) {
        super(id, name, description, power, 3); //Keep parent class properties, numPins always 3
        this.pin = [];
        this.pin[0] = 'gnd';
        this.pin[1] = 'pwr';
        this.pin[2] = 'analog'; //Analog compatible pin
    }
}

class Output_Int extends Output {
    constructor(id, name, description, power, numPins) {
        super(id, name, description, power, 3); //Keep parent class properties, numPins always 3
        this.pin = [];
        this.pin[0] = 'gnd';
        this.pin[1] = 'pwr';
        this.pin[2] = 'int'; //Digital compatible pin
    }
}

class Output_PWM extends Output {
    constructor(id, name, description, power, numPins) {
        super(id, name, description, power, 3); //Keep parent class properties, numPins always 3
        this.pin = [];
        this.pin[0] = 'gnd';
        this.pin[1] = 'pwr';
        this.pin[2] = 'pwm'; //PWM compatible pin
    }
}

class Output_Custom extends Output {
    constructor(id, name, description, power, pin) {
        super(id, name, description, power, pin.length + 1); //Keep parent class properties
        this.pin = [];
        this.pin[0] = 'gnd';
        //Ground always included, the rest are inserted after ground
        for(var i=0; i<pin.length; pin++){
            this.pin[i+1] = pin[i];
        }
    }
}

exports.led = new Output_Bool('led', 'LED', 'An LED light with an anode and cathode pin.', 5);
exports.servo = new Output_PWM('servo', 'Servo Motor', 'A motor that rotates to and holds an inputted position. WARNING: Do not connect servos with a high current draw directly to the board!', 5);
exports.motor = new Output_Custom('motor', 'Motor', 'A motor that rotates at an inputted speed. WARNING: Connecting motors directly to the board is dangerous unless you know what you are doing!', 5, ['pwm']);
exports.neopixel = new Output_Int('neopixel', 'Neopixels', 'A string of Neopixel compatible LEDs that can perform several RGB functions.', 5);
exports.dfmini = new Output_Custom('dfmini', 'DFMini Player', 'A music player for playing a variety of music and sound samples when a command is sent to the device.', 5, ['pwr', 'int', 'int']);