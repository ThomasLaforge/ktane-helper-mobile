export class SerialHelper {

    constructor(
        public serial: string
    ){}

    // TODO
    getLastNumber(){
        return 1
    }

    // Pair
    isLastNumberEven(){
        const lastNumber = this.getLastNumber()
        return lastNumber && lastNumber % 2 === 0
    }
    // Impair
    isLastNumberOdd(){
        const lastNumber = this.getLastNumber()
        return lastNumber && lastNumber % 2 === 1
    }
}