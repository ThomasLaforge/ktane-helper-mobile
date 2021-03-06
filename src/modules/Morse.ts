export const wordFrequencies = {
    shell: '3.505',
    halls: '3.515',
    slick: '3.522',
    trick: '3.532',
    boxes: '3.535',
    leaks: '3.542',
    strobe: '3.545',
    bistro: '3.552',
    flick: '3.555',
    bombs: '3.565',
    break: '3.572',
    brick: '3.575',
    steak: '3.582',
    sting: '3.592',
    vector: '3.595',
    beats: '3.600'
}

export type Word = 'shell' | 'halls' | 'slick' | 'trick' | 'boxes' | 'leaks' | 'strobe' | 'bistro' | 'flick' | 'bombs' | 'break' | 'brick' | 'steak' | 'sting' | 'vector' | 'beats'

export const words = Object.keys(wordFrequencies) as Word[]

export class MorseGame {

    constructor(
        public startOfWord: string,
        public dict = words
    ){}

    getFrequency(){
        const word = this.getWord()
        return word && wordFrequencies[word]
    }
    
    getWord(){
        return this.dict.find(w => w.startsWith(this.startOfWord))
    }

    hasOnlyOneSolution(){
        return this.getPossibilities().length === 1
    }

    getPossibilities(){
        return this.dict.filter(w => w.startsWith(this.startOfWord))
    }
}