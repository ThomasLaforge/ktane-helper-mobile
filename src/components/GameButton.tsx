import React, { Component } from 'react'
import { Text, View, Image, TouchableHighlight, StyleSheet, Dimensions, ScrollView } from 'react-native'
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
        const tileSize = Dimensions.get('window').width / 3 
        const imageSize = tileSize - 15
        return (
            <TouchableHighlight
                style={styles.box}
                onPress={() => this.props.navigation.navigate(this.props.name)}
            >
            <View style={styles.content}>
                <Image style={styles.image} 
                    source={GAMES[gameName].image} 
                    width={imageSize} 
                    height={imageSize} 
                />
                <Text style={styles.gameTitle}>{gameName}</Text>
            </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#d6d7da',
        borderRadius: 5
    },
    content: {
    },
    image: {
        alignItems: 'center'
    },
    gameTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#f4511e'
    }
})
