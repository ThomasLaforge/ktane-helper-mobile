export enum SimonColor {
    Blue,
    Red,
    Yellow,
    Green
}

export class SimonGame {

    constructor(
        public serialNumberWithVowel: boolean,
        public nbErrors: number,
        public pattern: SimonColor[] = []
    ){}

    addColor(color: SimonColor){
        this.pattern.push(color)
    }

    getSolution(){
        return this.pattern.map(c => this.getCorrespondingColor(c))
    }

    getCorrespondingColor(color: SimonColor){
        switch (this.serialNumberWithVowel) {
            case true:
                switch (this.nbErrors) {
                    case 0:
                        switch (color) {
                            case SimonColor.Red: return SimonColor.Blue
                            case SimonColor.Blue: return SimonColor.Red
                            case SimonColor.Green: return SimonColor.Yellow
                            case SimonColor.Yellow: return SimonColor.Green
                        }
                    case 1:
                        switch (color) {
                            case SimonColor.Red: return SimonColor.Yellow
                            case SimonColor.Blue: return SimonColor.Green
                            case SimonColor.Green: return SimonColor.Blue
                            case SimonColor.Yellow: return SimonColor.Red
                        }
                    case 2:
                        switch (color) {
                            case SimonColor.Red: return SimonColor.Green
                            case SimonColor.Blue: return SimonColor.Red
                            case SimonColor.Green: return SimonColor.Yellow
                            case SimonColor.Yellow: return SimonColor.Blue
                        }
                }
            case false:
                switch (this.nbErrors) {
                    case 0:
                        switch (color) {
                            case SimonColor.Red: return SimonColor.Blue
                            case SimonColor.Blue: return SimonColor.Yellow
                            case SimonColor.Green: return SimonColor.Green
                            case SimonColor.Yellow: return SimonColor.Red
                        }
                    case 1:
                        switch (color) {
                            case SimonColor.Red: return SimonColor.Red
                            case SimonColor.Blue: return SimonColor.Blue
                            case SimonColor.Green: return SimonColor.Yellow
                            case SimonColor.Yellow: return SimonColor.Green
                        }
                    case 2:
                        switch (color) {
                            case SimonColor.Red: return SimonColor.Yellow
                            case SimonColor.Blue: return SimonColor.Green
                            case SimonColor.Green: return SimonColor.Blue
                            case SimonColor.Yellow: return SimonColor.Red
                        }
                }

        }
    }

}