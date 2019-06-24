export enum ComplexStringColor {
    Blue,
    Red,
    RedAndBlue,
    Any
}

export enum ComplexStringLetter {
    C = 'C',
    D = 'D',
    S = 'S',
    P = 'P',
    B = 'B'
}

export class ComplexStringsGame {
    constructor(
        public hasParralelPort: boolean,
        public lastSerialNumberDigitIsEven: boolean, //Dernier chiffre est pair
        public hasMoreThanOneBattery: boolean
    ){}

    resolveString(stringColor:ComplexStringColor, hasStar: boolean, ledOn: boolean){
        const letter = this.getLetter(stringColor, hasStar, ledOn)

        switch (letter) {
            case ComplexStringLetter.C:
                return true
            case ComplexStringLetter.D:
                return false
            case ComplexStringLetter.S:
                return this.lastSerialNumberDigitIsEven
            case ComplexStringLetter.P:
                return this.hasParralelPort
            case ComplexStringLetter.B:
                return this.hasMoreThanOneBattery
        }
    }

    getLetter(stringColor:ComplexStringColor, hasStar: boolean, ledOn: boolean){
        // Color Any
        if( stringColor === ComplexStringColor.Any && !hasStar && !ledOn )
            { return ComplexStringLetter.C }
        else if( stringColor === ComplexStringColor.Any && hasStar && !ledOn )
            { return ComplexStringLetter.C }
        else if( stringColor === ComplexStringColor.Any && !hasStar && ledOn )
            { return ComplexStringLetter.D }
        else if( stringColor === ComplexStringColor.Any && hasStar && ledOn )
            { return ComplexStringLetter.B }

        // Color Blue
        else if( stringColor === ComplexStringColor.Blue && !hasStar && !ledOn )
            { return ComplexStringLetter.S }
        else if( stringColor === ComplexStringColor.Blue && hasStar && !ledOn )
            { return ComplexStringLetter.D }
        else if( stringColor === ComplexStringColor.Blue && !hasStar && ledOn )
            { return ComplexStringLetter.P }
        else if( stringColor === ComplexStringColor.Blue && hasStar && ledOn )
            { return ComplexStringLetter.P }

        // Color Red
        else if( stringColor === ComplexStringColor.Red && !hasStar && !ledOn )
            { return ComplexStringLetter.S }
        else if( stringColor === ComplexStringColor.Red && hasStar && !ledOn )
            { return ComplexStringLetter.C }
        else if( stringColor === ComplexStringColor.Red && !hasStar && ledOn )
            { return ComplexStringLetter.B }
        else if( stringColor === ComplexStringColor.Red && hasStar && ledOn )
            { return ComplexStringLetter.B }

        // Color Red and Blue
        else if( stringColor === ComplexStringColor.RedAndBlue && !hasStar && !ledOn )
            { return ComplexStringLetter.S }
        else if( stringColor === ComplexStringColor.RedAndBlue && hasStar && !ledOn )
            { return ComplexStringLetter.P }
        else if( stringColor === ComplexStringColor.RedAndBlue && !hasStar && ledOn )
            { return ComplexStringLetter.S }
        else if( stringColor === ComplexStringColor.RedAndBlue && hasStar && ledOn )
            { return ComplexStringLetter.D }
            
    }
}