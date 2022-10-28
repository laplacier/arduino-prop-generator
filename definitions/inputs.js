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

class Input {
    constructor(id, name, description, power, numPins) {
        this.id = id; //Identifier for site programming
        this.name = name; //Visual name for user
        this.description = description; //Flavor text for user
        this.power = power; //Max voltage tolerance
        this.numPins = numPins;
    }
}

class Input_Bool extends Input {
    constructor(id, name, description, power, isLatched) {
        super(id, name, description, power, 2); //Keep parent class properties, numPins always 2
        this.isLatched = isLatched; //Does this input keep its new state on toggle? ex: push buttons do not
        this.pin = [];
        this.pin[0] = 'gnd'; //TODO: do we want to allow active high later?
        this.pin[1] = 'bool'; //Boolean compatible pin
    }
}

class Input_Analog extends Input {
    constructor(id, name, description, power, numPins) {
        super(id, name, description, power, 3); //Keep parent class properties, numPins always 3
        this.pin = [];
        this.pin[0] = 'gnd';
        this.pin[1] = 'pwr';
        this.pin[2] = 'analog'; //Analog compatible pin
    }
}

class Input_Custom extends Input {
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

exports.button = new Input_Bool('button', 'Push Button', 'A button that does not stay pressed when pushed.', 5, false);
exports.button_t = new Input_Bool('button_t', 'Toggle Button', 'A button that stays physically pressed when pushed and releases when pushed again.', 5, true);
exports.switch = new Input_Bool('switch', 'Switch', 'A simple switch with two toggle states: on and off.', 5, true);
exports.switch_ppp = new Input_Custom('switch_ppp', '3 Position Switch', 'A switch with three toggle states: on(1), on(2), and off.', 5, ['bool', 'bool']);
exports.pot = new Input_Analog('pot', 'Potentiometer', 'A rotary knob or dial that outputs an analog value. Can detect several states depending on the position of the knob.', 5);
exports.encoder = new Input_Custom('encoder', 'Encoder', 'A rotary knob or dial that uses two offset boolean states to determine a clockwise or counterclockwise rotation. Unlike the potentiometer, this knob has some resistance as it clicks into set positions.', 5, ['pwr','bool','bool']);
//TODO: This current structure fails when additional input is needed from the user, such as the number of rows and cols of a keypad