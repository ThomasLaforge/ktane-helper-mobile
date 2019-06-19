import { SerialHelper } from "./SerialHelper";

export enum StringColor {
    White,
    Blue,
    Yellow,
    Black,
    Red
}

export class StringsGame {
    
    constructor(
        public strings: StringColor[],
        public serial?: string
    )
    {}

    getStringIndexToCut(): number {
        const serialHelper = new SerialHelper(this.serial)
        switch (this.nbStrings) {
            case 3:
                if(this.hasNo(StringColor.Red)){
                    return 2
                }
                else if(this.last === StringColor.White){
                    return this.nbStrings
                }
                else if(this.nbStringsOfColor(StringColor.Blue) > 1){
                    return this.strings.lastIndexOf(StringColor.Blue)
                }
                else {
                    return this.nbStrings
                }
            case 4:
                if(this.nbStringsOfColor(StringColor.Red) > 1 && serialHelper.isLastNumberOdd()){
                    return this.strings.lastIndexOf(StringColor.Red)
                }
                else if(this.last === StringColor.Yellow && this.hasNo(StringColor.Red)){
                    return 1
                }
                else if(this.nbStringsOfColor(StringColor.Blue) === 1){
                    return 1
                }
                else if(this.nbStringsOfColor(StringColor.Yellow) > 1){
                    return this.nbStrings
                }
                else {
                    return 2
                }
            case 5:
                if(this.last === StringColor.Black && serialHelper.isLastNumberOdd()){
                    return 4
                }
                else if(this.nbStringsOfColor(StringColor.Red) === 1 && this.nbStringsOfColor(StringColor.Yellow) > 1){
                    return 1
                }
                else if(this.hasNo(StringColor.Black)){
                    return 2
                }
                else {
                    return 1
                }
            case 6:
                if(this.hasNo(StringColor.Yellow) && serialHelper.isLastNumberOdd()){
                    return 3
                }
                else if(this.nbStringsOfColor(StringColor.Yellow) === 1 && this.nbStringsOfColor(StringColor.White) > 1){
                    return 4
                }
                else if(this.hasNo(StringColor.Red)){
                    return this.nbStrings
                }
                else {
                    return 4
                }
            default:
                throw Error("nbStrings not handled");
        }
    }

    has(color: StringColor){
        return this.strings.includes(color)
    }
    hasNo(color: StringColor){
        return !this.has(color)
    }

    nbStringsOfColor(color: StringColor){
        return this.strings
            .filter(c => c === color)
            .length
    }

    get first(){
        return this.strings[0]
    }

    get last(){
        return this.strings[this.nbStrings - 1]
    }

    get nbStrings(){
        return this.strings.length
    }
}