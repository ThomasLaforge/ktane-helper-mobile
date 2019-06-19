export type WITF_WORD = 'YES' | 'FIRST' | 'DISPLAY' | 'OKAY' | 'SAYS' | 'NOTHING' | '' | 'BLANK' | 'NO' | 'LED' | 'LEAD' | 'READ' | 'RED' | 'REED' | 'LEED' | 'HOLD ON' | 'YOU' | 'YOU ARE' | 'YOUR' | "YOU'RE" | 'UR' | 'THERE' | "THEY'RE" | 'THEIR' | 'THEY ARE' | 'SEE' | 'C' | 'CEE'

export const Words = [
    'YES',
    'FIRST',
    'DISPLAY',
    'OKAY',
    'SAYS',
    'NOTHING',
    '',
    'BLANK',
    'NO',
    'LED',
    'LEAD',
    'READ',
    'RED',
    'REED',
    'LEED',
    'HOLD ON',
    'YOU',
    'YOU ARE',
    'YOUR',
    "YOU'RE",
    'UR',
    'THERE',
    "THEY'RE",
    'THEIR',
    'THEY ARE',
    'SEE',
    'C',
    'CEE'
]

const wordsMap = {
    "READY": ["YES", "OKAY", "WHAT", "MIDDLE", "LEFT", "PRESS", "RIGHT", "BLANK", "READY", "NO", "FIRST", "UHHH", "NOTHING", "WAIT"], 
    "FIRST": ["LEFT", "OKAY", "YES", "MIDDLE", "NO", "RIGHT", "NOTHING", "UHHH", "WAIT", "READY", "BLANK", "WHAT", "PRESS", "FIRST"], 
    "NO": ["BLANK", "UHHH", "WAIT", "FIRST", "WHAT", "READY", "RIGHT", "YES", "NOTHING", "LEFT", "PRESS", "OKAY", "NO", "MIDDLE"], 
    "BLANK": ["WAIT", "RIGHT", "OKAY", "MIDDLE", "BLANK", "PRESS", "READY", "NOTHING", "NO", "WHAT", "LEFT", "UHHH", "YES", "FIRST"], 
    "NOTHING": ["UHHH", "RIGHT", "OKAY", "MIDDLE", "YES", "BLANK", "NO", "PRESS", "LEFT", "WHAT", "WAIT", "FIRST", "NOTHING", "READY"], 
    "YES": ["OKAY", "RIGHT", "UHHH", "MIDDLE", "FIRST", "WHAT", "PRESS", "READY", "NOTHING", "YES", "LEFT", "BLANK", "NO", "WAIT"], 
    "WHAT": ["UHHH", "WHAT", "LEFT", "NOTHING", "READY", "BLANK", "MIDDLE", "NO", "OKAY", "FIRST", "WAIT", "YES", "PRESS", "RIGHT"], 
    "UHHH": ["READY", "NOTHING", "LEFT", "WHAT", "OKAY", "YES", "RIGHT", "NO", "PRESS", "BLANK", "UHHH", "MIDDLE", "WAIT", "FIRST"], 
    "LEFT": ["RIGHT", "LEFT", "FIRST", "NO", "MIDDLE", "YES", "BLANK", "WHAT", "UHHH", "WAIT", "PRESS", "READY", "OKAY", "NOTHING"], 
    "RIGHT": ["YES", "NOTHING", "READY", "PRESS", "NO", "WAIT", "WHAT", "RIGHT", "MIDDLE", "LEFT", "UHHH", "BLANK", "OKAY", "FIRST"], 
    "MIDDLE": ["BLANK", "READY", "OKAY", "WHAT", "NOTHING", "PRESS", "NO", "WAIT", "LEFT", "MIDDLE", "RIGHT", "FIRST", "UHHH", "YES"], 
    "OKAY": ["MIDDLE", "NO", "FIRST", "YES", "UHHH", "NOTHING", "WAIT", "OKAY", "LEFT", "READY", "BLANK", "PRESS", "WHAT", "RIGHT"], 
    "WAIT": ["UHHH", "NO", "BLANK", "OKAY", "YES", "LEFT", "FIRST", "PRESS", "WHAT", "WAIT", "NOTHING", "READY", "RIGHT", "MIDDLE"], 
    "PRESS": ["RIGHT", "MIDDLE", "YES", "READY", "PRESS", "OKAY", "NOTHING", "UHHH", "BLANK", "LEFT", "FIRST", "WHAT", "NO", "WAIT"], 
    "YOU": ["SURE", "YOU ARE", "YOUR", "YOU'RE", "NEXT", "UH HUH", "UR", "HOLD", "WHAT?", "YOU", "UH UH", "LIKE", "DONE", "U"], 
    "YOU ARE": ["YOUR", "NEXT", "LIKE", "UH HUH", "WHAT?", "DONE", "UH UH", "HOLD", "YOU", "U", "YOU'RE", "SURE", "UR", "YOU ARE"], 
    "YOUR": ["UH UH", "YOU ARE", "UH HUH", "YOUR", "NEXT", "UR", "SURE", "U", "YOU'RE", "YOU", "WHAT?", "HOLD", "LIKE", "DONE"],
    "YOU'RE": ["YOU", "YOU'RE", "UR", "NEXT", "UH UH", "YOU ARE", "U", "YOUR", "WHAT?", "UH HUH", "SURE", "DONE", "LIKE", "HOLD"], 
    "UR": ["DONE", "U", "UR", "UH HUH", "WHAT?", "SURE", "YOUR", "HOLD", "YOU'RE", "LIKE", "NEXT", "UH UH", "YOU ARE", "YOU"], 
    "U": ["UH HUH", "SURE", "NEXT", "WHAT?", "YOU'RE", "UR", "UH UH", "DONE", "U", "YOU", "LIKE", "HOLD", "YOU ARE", "YOUR"], 
    "UH HUH": ["UH HUH", "YOUR", "YOU ARE", "YOU", "DONE", "HOLD", "UH UH", "NEXT", "SURE", "LIKE", "YOU'RE", "UR", "U", "WHAT?"], 
    "UH UH": ["UR", "U", "YOU ARE", "YOU'RE", "NEXT", "UH UH", "DONE", "YOU", "UH HUH", "LIKE", "YOUR", "SURE", "HOLD", "WHAT?"], 
    "WHAT?": ["YOU", "HOLD", "YOU'RE", "YOUR", "U", "DONE", "UH UH", "LIKE", "YOU ARE", "UH HUH", "UR", "NEXT", "WHAT?", "SURE"], 
    "DONE": ["SURE", "UH HUH", "NEXT", "WHAT?","YOUR", "UR", "YOU'RE", "HOLD", "LIKE", "YOU", "U", "YOU", "ARE", "UH UH", "DONE"], 
    "NEXT": ["WHAT?", "UH HUH", "UH UH", "YOUR", "HOLD", "SURE", "NEXT", "LIKE", "DONE", "YOU ARE", "UR", "YOU'RE", "U", "YOU"], 
    "HOLD": ["YOU ARE", "U", "DONE", "UH UH", "YOU", "UR", "SURE", "WHAT?","YOU'RE", "NEXT", "HOLD", "UH HUH", "YOUR", "LIKE"], 
    "SURE": ["YOU ARE", "DONE", "LIKE", "YOU'RE", "YOU", "HOLD", "UH HUH", "UR", "SURE", "U", "WHAT?", "NEXT", "YOUR", "UH UH"], 
    "LIKE": ["YOU'RE", "NEXT", "U", "UR", "HOLD", "DONE", "UH UH", "WHAT?","UH HUH", "YOU", "LIKE", "SURE", "YOU ARE", "YOUR"]
}

export class WhoIsTheFirstGame {

    constructor(
        public sreenWord: WITF_WORD,
        public words: WITF_WORD[]
    ){}

    getPosition(){
        switch (this.sreenWord) {
            case 'YES': return 2
            case 'FIRST': return 1
            case 'DISPLAY': return 5
            case 'OKAY': return 1
            case 'SAYS': return 5
            case 'NOTHING': return 2
            case '': return 4
            case 'BLANK': return 3
            case 'NO': return 5
            case 'LED': return 2
            case 'LEAD': return 5
            case 'READ': return 3
            case 'RED': return 3
            case 'REED': return 4
            case 'LEED': return 4
            case 'HOLD ON': return 5
            case 'YOU': return 3
            case 'YOU ARE': return 5
            case 'YOUR': return 3
            case "YOU'RE": return 3
            case 'UR': return 0
            case 'THERE': return 5
            case "THEY'RE": return 4
            case 'THEIR': return 3
            case 'THEY ARE': return 2
            case 'SEE': return 5
            case 'C': return 1
            case 'CEE': return 5        
            default:
                throw Error("words unknow");
        }
    }

    getSolution(){
        const position = this.getPosition()
        const wordToPosition = this.words[position]
        const wordsPossibilities = wordsMap[wordToPosition]
        if(!wordsPossibilities){
            throw Error(`no word list for this word: ${wordToPosition}`);
            
        }
        const solution = wordsPossibilities.find(w => this.words.includes(w))
        return solution
    }

}