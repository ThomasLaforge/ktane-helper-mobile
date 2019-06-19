export const NB_SYMBOLS = 4

export enum Symbol {
    O,
    A,
    Lambda,
    NInversed,
    Triangle,
    X,
    C,
    Interrogation,
    Star,
    StarFull,
    Q,
    E,
    Company,
    W,
    XI,
    R,
    Smiley,
    B,
    Paragraphe,
    Six,
    Three,
    Trident,
    Different,
    AE,
    H,
    Omega
}

export const SymbolsColumns: Symbol[][] = [
    [
        Symbol.O,
        Symbol.A,
        Symbol.Lambda,
        Symbol.NInversed,
        Symbol.Triangle,
        Symbol.X,
        Symbol.C
    ],
    [
        Symbol.E,
        Symbol.O,
        Symbol.C,
        Symbol.Q,
        Symbol.Star,
        Symbol.X,
        Symbol.Interrogation
    ],
    [
        Symbol.Company,
        Symbol.W,
        Symbol.Q,
        Symbol.XI,
        Symbol.R,
        Symbol.Lambda,
        Symbol.Star
    ],
    [
        Symbol.Six,
        Symbol.Paragraphe,
        Symbol.B,
        Symbol.Triangle,
        Symbol.XI,
        Symbol.Interrogation,
        Symbol.Smiley
    ],
    [
        Symbol.Trident,
        Symbol.Smiley,
        Symbol.B,
        Symbol.C,
        Symbol.Paragraphe,
        Symbol.Three,
        Symbol.StarFull
    ],
    [
        Symbol.Six,
        Symbol.E,
        Symbol.Different,
        Symbol.AE,
        Symbol.Trident,
        Symbol.H,
        Symbol.Omega
    ]
]

export class SymbolGame {

    constructor(
        public symbols: Symbol[]
    )
    {}

    getColumn(){
        let i = 0
        while(i < SymbolsColumns.length){
            const col = SymbolsColumns[i]
            if(
                this.symbols.filter(s => col.includes(s)).length = NB_SYMBOLS
            ){
                return SymbolsColumns[i]
            }
            else {
                i++
            }
        }

        if(i === SymbolsColumns.length){
            throw Error('symbol column not found')
        }

        return SymbolsColumns[i]
    }

    getSymbolOrdered(){
        let symbols = this.symbols.slice()
        const col = this.getColumn()
        symbols.sort( (a, b) => {
            return col.indexOf(a) - col.indexOf(b)
        })
        return symbols
    }
}