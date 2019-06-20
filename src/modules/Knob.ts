import isEqual from 'lodash/isEqual'

// Only need to checks the three first columns to identify the side to switch the knob
export const knobPatterns = {
    TOP: [
        [
            [0,0,1],
            [1,1,1],
        ],
        [
            [1,0,1],
            [0,1,1],
        ]
    ],
    BOTTOM: [
        [
            [0,1,1],
            [1,1,1],
        ],
        [
            [1,0,1],
            [0,1,0],
        ]
    ],
    LEFT: [
        [
            [0,0,0],
            [1,0,0],
        ],
        [
            [0,0,0],
            [0,0,0],
        ]
    ],
    RIGHT: [
        [
            [1,0,1],
            [1,1,1],
        ],
        [
            [1,0,1],
            [1,1,1],
        ]
    ]
}

export enum KnobPosition {
    TOP = 'TOP',
    BOTTOM = 'BOTTOM',
    RIGHT = 'RIGHT',
    LEFT = 'LEFT'
}

export class KnobGame {

    constructor(
        public pattern: number[][]
    ){}

    getPosition(){
        return Object.keys(knobPatterns).find(position => {
            const positionPatterns = knobPatterns[position]
            return positionPatterns.findIndex(p => isEqual(p, this.pattern)) !== -1
        })
    }
}