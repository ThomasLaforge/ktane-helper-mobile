import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native';
import GameBtn from '../components/GameButton'
import { AppProps } from '../../App';
import { GAMES } from '../defs';

interface GameSelectorProps extends AppProps {
}
interface GameSelectorState {
}

export default class GameSelector extends Component<GameSelectorProps, GameSelectorState> {

    constructor(props: GameSelectorProps) {
        super(props)
        this.state = {
        }  
    }

    static navigationOptions = {
        title: 'Game Selector',
    };

    renderGameButtons(){
        return Object.keys(GAMES).map( (gName, i) => (
            <GameBtn navigation={this.props.navigation} name={gName} key={i} />
        ))
    }

    render() {
        return (
        <ScrollView contentContainerStyle={styles.gamesList}>
            {this.renderGameButtons()}
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    gamesList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflow: 'visible'
    }
})