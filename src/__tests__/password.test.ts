import { PasswordsGame } from "../modules/Passwords";

describe('password', () => {
    test('get all string possibilities', () => {
        let pwGame = new PasswordsGame([
            ['a', 'b'],
            ['c', 'd']
        ])
        const possibilitiesStrings = pwGame.getSubStringsPossibles()
        console.log('possibilitiesStrings', possibilitiesStrings)
        expect(possibilitiesStrings).toEqual(['ac', 'bc', 'ad', 'bd'])
    })
})
