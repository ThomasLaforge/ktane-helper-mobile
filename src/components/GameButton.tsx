import React, { Component } from 'react'
import { Text, View, Image, TouchableHighlight, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Card } from 'native-base';
import { AppProps } from '../../App';
import { GAMES } from '../defs';

interface GameButtonProps extends AppProps {
    name: string
}

export default class GameButton extends Component<GameButtonProps, {}> {
    constructor(props: GameButtonProps){
        super(props)
    }

    render() {
        const gameName = this.props.name
        const imageSize = Dimensions.get('window').width / 3
        return (
            <TouchableHighlight
                style={styles.content}
                onPress={() => {
                    console.log('click on game', this.props.name)
                    this.props.navigation.navigate(this.props.name)
                }}
            >
            <ScrollView>
                <Image style={styles.image} 
                    source={GAMES[gameName].image} 
                    width={imageSize} 
                    height={imageSize} 
                />
                <Text style={styles.gameTitle}>{gameName}</Text>
            </ScrollView>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        marginVertical: 10
    },
    image: {},
    gameTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    }
})
