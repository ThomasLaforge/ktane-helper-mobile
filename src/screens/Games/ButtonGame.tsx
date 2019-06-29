/**
 * Il y a 7 cas possibles: 
 * - 4 où il faut garder le bouton appuyer avant une autre étape
 * - 3 où il faut juste appuyer et relacher immédiatement
 * 
 * Il faut d'abord essayer de voir s'il s'agit d'un des trois cas rapides:
 * - 1 pile + Detonate
 * - 2 piles + FRK
 * - Hold + rouge
 * 
 * Si ce n'est pas le cas alors il faut garder le bouton appuyer.
 * En fonction de la couleur, il faut relacher quand un numéro est présent dans le décompte:
 * - bleu -> 4
 * - jaune -> 5
 * - reste -> 1
 * 
 */
import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppProps } from '../../../App';
import { THEME_COLOR } from '../../styles/colors';

import Splitter from '../../components/Splitter'

interface ButtonGameProps extends AppProps {
}
interface ButtonGameState {
}

export class ButtonGame extends Component<ButtonGameProps, ButtonGameState> {

    constructor(props: ButtonGameProps) {
        super(props)
        this.state = {

        }  
    }

    static navigationOptions = {
        title: 'Bouton',
    };

    render() {
        return (
        <View style={styles.content}>
            <Text style={styles.instruction_title}>Cliquer</Text>
            <View style={[styles.questions_zone, styles.easyCase_zone]}>
                <View style={styles.easyCase_first}>
                    <Text style={styles.question}>Bouton Detonate / Hold ?</Text>
                    <Text style={styles.possibility}>- DETONATE + 1 pile</Text>
                    <Text style={styles.possibility}>- HOLD Rouge</Text>
                </View>
                <View style={styles.easyCase_other}>
                    <Text style={styles.question}>Ou</Text>
                    <Text style={styles.possibility}>- 2 piles + FRK</Text>
                </View>
            </View>

            <Splitter marginVertical={70} />
            
            <Text style={styles.instruction_title}>Cliquer + Relacher</Text>
            <Text style={styles.instruction_content}>
                Sinon il faut garder le bouton appuyer et relacher quand le numéro, 
                correspondant à la couleur de la zone éclairée, apparait sur le minuteur
            </Text>
            <View style={[styles.questions_zone, styles.difficultCase_zone]}>
                <Text style={[styles.keepPushingBtn, styles.blueNumber]}>4</Text>
                <Text style={[styles.keepPushingBtn, styles.yellowNumber]}>5</Text>
                <Text>Sinon</Text>
                <Text style={[styles.keepPushingBtn, styles.otherNumber]}>1</Text>
            </View>
        </View>
        )
    }
}

export default ButtonGame

const styles = StyleSheet.create({
    content: {
        padding: 10
    },
    easyCase_zone: {},
    easyCase_first: {},
    easyCase_separator: {},
    easyCase_other: {},
    difficultCase_zone: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    keepPushingBtn: {
        fontWeight: 'bold',
        fontSize: 55,
        width: 100,
        height: 100,
        backgroundColor: '#DCDCDC',
        textAlign: 'center',
        lineHeight: 80,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10
    },
    blueNumber: {
        color: 'blue'
    },
    yellowNumber: {
        color: 'yellow'
    },
    otherNumber: {
        color: 'white'
    },
    questions_zone: {},
    question: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    },
    possibility: {
        paddingLeft: 15
    },
    possibility_color: {},
    instruction_content: {
        textAlign: 'justify',
        marginBottom: 35,
        lineHeight: 25
    },
    instruction_title: {
        marginVertical: 20,
        textAlign: 'center',
        color: THEME_COLOR,
        fontWeight: 'bold',
        fontSize: 25
    }
})