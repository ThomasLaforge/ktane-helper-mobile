import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';
import { Card } from 'native-base'
import { AppProps } from '../../../App';
import { PasswordsGame, char } from '../../modules/Passwords';

const NB_MAX_SOLUTIONS_TO_SHOW = 5

interface PasswordsProps extends AppProps {
}
interface PasswordsState {
    letters: char[][],
    charsToAdd: char[]
}

export class Passwords extends Component<PasswordsProps, PasswordsState> {

    constructor(props: PasswordsProps) {
        super(props)
        this.state = {
            letters: [],
            charsToAdd: []
        }  
    }

    get pwdGame(){
        return new PasswordsGame(this.state.letters)
    }

    static navigationOptions = {
        title: 'Passwords',
    };

    renderPwdPossibilities(){
        const strings = this.pwdGame.getSubStringsPossibles()
        return strings && strings.map( (p, i) => (
            <Text key={i}>{p}</Text>
        ))
    }
    
    renderPwdPossibleWords(){
        const strings = this.pwdGame.getSolutions()
        if(strings.length === 0){
            return <Text>No solutions. Verify letters added.</Text>
        }
        else if(strings.length > NB_MAX_SOLUTIONS_TO_SHOW){
            return strings.map( (p, i) => (
                <Text key={i}>{p}</Text>
            ))
        }
        else {
            return <Text>Sorry, too many words still possible. Add some letters !</Text>
        }
    }

    removeLastLetters = () => {
        if(this.state.letters.length > 0){
            this.setState({
                letters: this.state.letters.slice(0, this.state.letters.length - 1)
            })
        }
    }

    addLetters = () => {
        this.setState({
            letters: [...this.state.letters, this.state.charsToAdd],
            charsToAdd: []
        })
    }

    reset = () => {
        this.setState({
            letters: []
        })
    }

    selectChar = (char) => {
        let charsToAdd = this.state.charsToAdd.slice()
        if(charsToAdd.includes(char)){
            charsToAdd = charsToAdd.filter(c => c !== char)
        }
        else {
            charsToAdd.push(char)
        }

        this.setState({
            charsToAdd 
        })
    }

    get possibleChars(){
        return this.pwdGame.getLettersPossibleOnPosition()
    }
    renderCharButtons(){
        return this.possibleChars.map( (char: char) => {
            <Card 
                onTouchStart={() => this.selectChar(char)}
                style={{ borderColor: this.state.charsToAdd.includes(char) ? 'green' : null }}
            >
                <Text>{char}</Text>
            </Card>
        })
    }

    renderActionsButtons(){
        return <View>
            <Button title='Remove' onPress={this.removeLastLetters} />
            <Button title='Add' onPress={this.addLetters}/>
            <Button title='Reset' onPress={this.reset}/>
        </View>
    }

    render() {
        return (
        <View>
            <Card>
                {this.renderCharButtons()}
                {this.renderActionsButtons()}
            </Card>
            <Card>
                {this.renderPwdPossibleWords()}
            </Card>
        </View>
        )
    }
}

export default Passwords