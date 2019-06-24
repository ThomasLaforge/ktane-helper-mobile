import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { AppProps } from '../../../App';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { KnobGame } from '../../modules/Knob';

interface KnobProps extends AppProps {
}
interface KnobState {
    table: (0 | 1)[][]
}

export default class Knob extends Component<KnobProps, KnobState> {

    constructor(props: KnobProps) {
        super(props)
        this.state = {
            table: [
                [0, 0, 0], 
                [0, 0, 0]
            ]
        }  
    }

    static navigationOptions = {
        title: 'Knob',
    };

    renderTable(){
        return <View>
            <Text>Need to render table :)</Text>
        </View>
    }
    renderResult(){
        const game = new KnobGame(this.state.table)
        return <View style={styles.result}>
            <Text>{game.getPosition()}</Text>
        </View>
    }

    render() {
        return (
        <View>
            {this.renderTable()}
            {this.renderResult()}
        </View>
        )
    }
}

const styles = StyleSheet.create({
    result: {},
    table: {}
});