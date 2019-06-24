import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { AppProps } from '../../../App';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { MazeGame } from '../../modules/Maze';

interface MazeProps extends AppProps {
}
interface MazeState {
    cols: number[],
}

export default class Maze extends Component<MazeProps, MazeState> {

    constructor(props: MazeProps) {
        super(props)
        this.state = {
            cols: []
        }  
    }

    static navigationOptions = {
        title: 'Maze',
    };

    renderForm(){
        return <View>
            {/* input number for col one */}
            {/* input number for col two */}
            {/* NB: col value [1, 6] */}
        </View>
    }

    renderResult(){
        const game = new MazeGame(this.state.cols)
        return <View style={styles.result}>
            {/* <Image > */}
        </View>
    }

    render() {
        return (
        <View>
            {this.renderForm()}
            {this.renderResult()}
        </View>
        )
    }
}

const styles = StyleSheet.create({
    result: {},
});