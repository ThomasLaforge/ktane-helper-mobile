import isEqual from 'lodash/isEqual'

export const mazeColumnMapping = [
    [1, 6],
    [2, 5],
    [4, 6],
    [1, 1],
    [4, 5],
    [3, 5],
    [2, 2],
    [3, 4],
    [1, 3],
]

export class MazeGame {

    constructor(
        public columns: number[]
    ){}

    getMaze(){
        return mazeColumnMapping.findIndex(cols => isEqual(this.columns, cols))       
    }

}