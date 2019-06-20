import React, { Component } from 'react'
import { View } from 'react-native';

interface GameSelectorProps {
}
interface GameSelectorState {
}

export class GameSelector extends Component<GameSelectorProps, GameSelectorState> {

    constructor(props: GameSelectorProps) {
        super(props)
        this.state = {
        }  
    }

    static navigationOptions = {
        title: 'GameSelector',
    };

    render() {
        return (
        <View>
            
        </View>
        )
    }
}

export default GameSelector