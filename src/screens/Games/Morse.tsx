import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { AppProps } from '../../../App';
import { MorseGame } from '../../modules/Morse';
import { Input } from 'native-base';

interface MorseProps extends AppProps {
}
interface MorseState {
    startString: string
}

export default class Morse extends Component<MorseProps, MorseState> {

    constructor(props: MorseProps) {
        super(props)
        this.state = {
            startString: 'st'
        }  
    }

    static navigationOptions = {
        title: 'Morse',
    };

    renderResult(){
        const game = new MorseGame(this.state.startString)
        const possibilities = game.getPossibilities()
        const nbPossibilities = possibilities.length

        return <View>
            {nbPossibilities === 0 &&
                <Text>Il n`y a pas de possibilités. Essayer de modifier une lettre.</Text>
            }
            {nbPossibilities === 1 && 
                <Text>La fréquence est : { game.getFrequency() } MHz</Text>
            }
            {nbPossibilities > 1 && nbPossibilities < 4 && [
                <Text key={0}>Voici les possibilités de mot : { possibilities.join(', ') }.</Text>,
                <Text key={1}>Ajouter une lettre devrait permmettre de trouver la bonne fréquence.</Text>
            ]}
            {nbPossibilities >= 4 && 
                <Text>Il y a trop de possibilités. Ajouter encore quelques lettres.</Text>
            }
        </View>
    }

    render() {
        return (
        <View>
            <Input label='Rentrez votre mot / début de mot' 
                value={this.state.startString}
                onChangeText={(value) => this.setState({startString: value})}
            />
            {this.renderResult()}
        </View>
        )
    }
}

const styles = StyleSheet.create({

});