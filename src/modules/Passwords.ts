import uniq from 'lodash/uniq'

export type Word = 'about' | 'after' | 'again' | 'below' | 'could' | 'every' | 'rst' | 'found' | 'great' | 'house' | 'large' | 'learn' | 'never' | 'other' | 'place' | 'plant' | 'point' | 'right' | 'small' | 'sound' | 'spell' | 'still' | 'study' | 'their' | 'there' | 'these' | 'thing' | 'think' | 'three' | 'water' | 'where' | 'which' | 'world' | 'would' | 'write'
export const words: Word[] = ['about', 'after', 'again', 'below', 'could', 'every', 'rst', 'found', 'great', 'house', 'large', 'learn', 'never', 'other', 'place', 'plant', 'point', 'right', 'small', 'sound', 'spell', 'still', 'study', 'their', 'there', 'these', 'thing', 'think', 'three', 'water', 'where', 'which', 'world', 'would', 'write']

export type char = 'q' | 'w' | 'e' | 'r' | 't' | 'y' | 'u' | 'i' | 'o' | 'p' | 'a' | 's' | 'd' | 'f' | 'g' | 'h' | 'j' | 'k' | 'l' | 'z' | 'x' | 'c' | 'v' | 'b' | 'n' | 'm'

export class PasswordsGame {

    constructor(
        public possibilities: char[][] = []
    )
    {}

    isSuffisient(){
        return this.getSolutions().length === 0
    }

    getSubStringsPossibles(echelon = 0, possibilities: string[] = ['']){
        let newPossibilities = []
            
        for (let i = 0; i < this.possibilities[echelon].length; i++) {
            newPossibilities.push(...possibilities.map( p => 
                p + this.possibilities[echelon][i]
            ))
        }

        if(echelon < this.possibilities.length - 1){
            return this.getSubStringsPossibles(echelon + 1, newPossibilities)
        }

        return newPossibilities
    }

    getSolutions(){
        const subStringPossibilities = this.getSubStringsPossibles()
        const solutions = subStringPossibilities.reduce( 
            (solutions, p) => solutions.concat(this.getSolutionsFromSubString(p))
            , []
        )
        return solutions
    }

    getSolutionsFromSubString(subString: string){
        return words.filter(w => w.startsWith(subString))
    }

    getSolution(){
        return this.isSuffisient() && this.getSolutions()[0]
    }

    getLettersPossibleOnPosition(pos = this.possibilities.length + 1){
        return uniq(words.map(w => w[pos - 1]))
    }

}