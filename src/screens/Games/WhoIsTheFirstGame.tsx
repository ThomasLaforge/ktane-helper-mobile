import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TextInput, CheckBox, Switch, Picker, Dimensions } from 'react-native';
import { AppProps } from '../../../App';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { WhoIsTheFirstGame, BTN_WORD, WITF_SCREEN_WORD, SCREEN_WORDS, NB_WORDS } from '../../modules/WhoIsTheFirst';

interface WITFProps extends AppProps {
}
interface WITFState {
    words: BTN_WORD[],
    screenWord: WITF_SCREEN_WORD
}

export default class WITF extends Component<WITFProps, WITFState> {

    constructor(props: WITFProps) {
        super(props)
        this.state = {
            words: new Array(NB_WORDS).fill(undefined),
            screenWord: undefined
        }  
    }

    static navigationOptions = {
        title: 'Who is the first',
    };

    renderForm(){
        return <View style={styles.form}>
            <Text style={styles.intro}>Fill the form to get the button to click on</Text>
            <View style={styles.formPart}>
                <Text style={styles.formTitle}>Screen Word</Text>
                <Picker
                    selectedValue={this.state.screenWord}
                    onValueChange={itemValue => {
                        if (itemValue !== 0) {
                            this.setState({ screenWord: itemValue })
                        }
                    }}
                    >
                    <Picker.Item label='Please select an option...' value='0' />
                    {SCREEN_WORDS.sort().map((word, index) => (
                        <Picker.Item key={index+1} label={word} value={word} />
                        ))}
                </Picker>
            </View>
            <View style={styles.formPart}>
                <Text style={styles.formTitle}>Button words</Text>
                <View style={styles.form_btns}>
                    { this.state.words.map( (w, i) => (
                    <Picker
                        style={styles.btnPicker}
                        key={i}
                        selectedValue={this.state.words[i]}
                        onValueChange={itemValue => {
                            if (itemValue !== 0) {
                                let words = this.state.words
                                words[i] = itemValue
                                this.setState({ words })
                            }
                        }}
                    >
                        <Picker.Item label='Please select an option...' value='0' />
                        {SCREEN_WORDS.sort().map((word, index) => (
                            <Picker.Item key={index+1} label={word} value={word} />
                        ))}
                    </Picker>
                    ))}
                </View>
            </View>
        </View>
    }

    renderResult(){
        const { screenWord, words } = this.state
        const game = new WhoIsTheFirstGame(screenWord, words)
        try {
            const resultValue = screenWord && words.filter(w => !!w).length === NB_WORDS ? game.getSolution() : '...'
            return <Text style={styles.resultContent}>
                You have to click on <Text style={styles.resultValue}>{resultValue}</Text>
            </Text>
        }
        catch(e){
            return <Text style={styles.resultContent}>You made an error filling the form...</Text>
        }
    }

    render() {
        return (
        <View style={styles.screen}>
            {this.renderForm()}
            <View style={styles.result}>
                <Text style={styles.resultTitle}>Solution</Text>
                {this.renderResult()}
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    intro: {
        fontSize: 19,
        fontStyle: 'italic',
        textAlign: 'center',
        marginVertical: 30
    },
    formTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    screen: {
        display: 'flex',
        flexDirection: 'column'
    },
    formPart: {
        marginVertical: 25
    },
    form_btns: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    btnPicker: {
        width: Dimensions.get('screen').width / 2,
        marginVertical: 20
    },
    result: {
        marginTop: 30
    },
    resultTitle: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
    },
    resultContent: {
        textAlign: 'center',
    },
    resultValue: {
        fontSize: 19,
        fontWeight: 'bold',
    }
});