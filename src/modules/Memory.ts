
export interface Turn {
    screenValue: number
    inputValues: number[]
}

export interface TurnComplete extends Turn {
    inputClicked: number
}

export class MemoryGame {

    constructor(
        public history: TurnComplete[] = []
    ){}

    getAnswer(turn: Turn): number {
        switch (this.history.length + 1) {
            case 1:
                let answer = turn.screenValue
                if(answer === 1){
                    answer++
                }
                return answer
            case 2:                
                switch (turn.screenValue) {
                    case 2:
                    case 4:
                        return this.history[0].inputClicked
                    case 1:
                        return this.getPositionOfNumber(turn, 4)
                    case 3:
                        return 1
                    default:
                        break;
                }
            case 3:
                switch (turn.screenValue) {
                    case 1:
                        return this.getPositionOfSameNumberOfStep(2, turn)
                    case 2:
                        return this.getPositionOfSameNumberOfStep(1, turn)
                    case 3:
                        return 3
                    case 4:
                        return this.getPositionOfNumber(turn, 4)
                    default:
                        break;
                }
            case 4:
                switch (turn.screenValue) {
                    case 1:
                        return this.getPositionClickedOnStep(1)
                    case 2:
                        return 1
                    case 3:
                        return this.getPositionClickedOnStep(2)
                    case 4:
                        return this.getPositionClickedOnStep(2)
                    default:
                        break;
                }     
            case 5:
                switch (turn.screenValue) {
                    case 1:
                        return this.getPositionOfSameNumberOfStep(1, turn)
                    case 2:
                        return this.getPositionOfSameNumberOfStep(2, turn)
                    case 3:
                        return this.getPositionOfSameNumberOfStep(4, turn)
                    case 4:
                        return this.getPositionOfSameNumberOfStep(3, turn)
                    default:
                        break;
                }            
            default:
                throw Error('turn not handled')
        }
    }

    getPositionOfSameNumberOfStep(step: number, actualTurn: Turn){
        const oldTurn = this.history[step - 1]
        const oldTurnNumber = oldTurn.inputValues[oldTurn.inputClicked]
        return actualTurn.inputValues.findIndex(inputVal => inputVal === oldTurnNumber) + 1
    }

    getPositionOfNumber(turn: Turn, num: number){
        return turn.inputValues.findIndex(inputVal => inputVal === num) + 1
    }

    getPositionClickedOnStep(step: number){
        return this.history[step - 1].inputClicked
    }

}