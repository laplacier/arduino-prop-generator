class Inputs {
    //TODO: define input class properly
    constructor(id, name, power, pin) {
        this.id = id; //Identifier for site programming
        this.name = name; //Visual name
        this.power = power; //Max voltage tolerance
        this.pin = [];
        this.pin.type = pin[0];
    }
}

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