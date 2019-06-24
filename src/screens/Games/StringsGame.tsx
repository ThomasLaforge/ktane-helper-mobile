import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TextInput, CheckBox, Switch } from 'react-native';
import { AppProps } from '../../../App';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { StringsGame, StringColor } from '../../modules/Strings';

interface StringsProps extends AppProps {
}
interface StringsState {
    lastNumberOdd: boolean,
    colors: StringColor[]
}

export default class Strings extends Component<StringsProps, StringsState> {

    constructor(props: StringsProps) {
        super(props)
        this.state = {
            lastNumberOdd: false,
            colors: []
        }  
    }

    static navigationOptions = {
        title: 'Strings',
    };

    renderForm(){
        return <View style={styles.form}>
            <Switch value={this.state.lastNumberOdd} />
        </View>
    }

    renderResult(){
        const {colors, lastNumberOdd} = this.state
        const game = new StringsGame(colors, lastNumberOdd)
        return <View style={styles.result}>
            <Text>You have to cut the {game.getStringIndexToCut()} string !</Text>
        </View>
    }

    render() {
        return (
        <View style={styles.screen}>
            {this.renderForm()}
            {this.renderResult()}
        </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        display: 'flex',
        flexDirection: 'column'
    },
    result: {},
    form: {}
});