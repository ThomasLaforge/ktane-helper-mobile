export enum StringSequenceColor {
    Red,
    Blue,
    Black
}

export enum Link {
    A = 'A',
    B = 'B',
    C = 'C'
}

export class StringSequenceGame {

    constructor(
        public colors: StringSequenceColor[]
    ){}

    shouldBeCut(color = this.lastColor){
        switch (color) {
            case StringSequenceColor.Red:
                switch (this.getNbStringOfColor(color) + 1) {
                    case 1: return [Link.C]
                    case 2: return [Link.B]
                    case 3: return [Link.A]
                    case 4: return [Link.A, Link.C]
                    case 5: return [Link.B]
                    case 6: return [Link.A, Link.C]
                    case 7: return [Link.A, Link.B, Link.C]
                    case 8: return [Link.A, Link.B]
                    case 9: return [Link.B]
                    default:
                        throw Error(`cut string not handled: ${color} nb: ${this.getNbStringOfColor(color) + 1}`)
                }
            case StringSequenceColor.Blue:
                switch (this.getNbStringOfColor(color) + 1) {
                    case 1: return [Link.B]
                    case 2: return [Link.A, Link.C]
                    case 3: return [Link.B]
                    case 4: return [Link.A]
                    case 5: return [Link.B]
                    case 6: return [Link.B, Link.C]
                    case 7: return [Link.C]
                    case 8: return [Link.A, Link.C]
                    case 9: return [Link.A]
                    default:
                        throw Error(`cut string not handled: ${color} nb: ${this.getNbStringOfColor(color) + 1}`)
                }
            case StringSequenceColor.Black:
                switch (this.getNbStringOfColor(color) + 1) {
                    case 1: return [Link.A, Link.B, Link.C]
                    case 2: return [Link.A, Link.C]
                    case 3: return [Link.B]
                    case 4: return [Link.A, Link.C]
                    case 5: return [Link.B]
                    case 6: return [Link.B, Link.C]
                    case 7: return [Link.A, Link.B]
                    case 8: return [Link.C]
                    case 9: return [Link.C]
                    default:
                        throw Error(`cut string not handled: ${color} nb: ${this.getNbStringOfColor(color) + 1}`)
                }
            default:
                throw Error('not handled string color');
        }
    }

    addString(color: StringSequenceColor){
        this.colors.push(color)
    }

    getNbStringOfColor(color: StringSequenceColor){
        return this.colors.filter(c => c === color).length
    }

    get lastColor(){
        return this.colors[this.colors.length - 1]
    }
}