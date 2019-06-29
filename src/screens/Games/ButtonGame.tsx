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
import { View, Text, Button } from 'react-native';
import { AppProps } from '../../../App';
import { THEME_COLOR } from '../../styles/colors';

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
        <View>
            <Text>
            {`
Il faut d'abord essayer de voir s'il s'agit d'un des trois cas rapides:
    - 1 pile + Detonate
    - 2 piles + FRK
    - Hold + rouge

Si ce n'est pas le cas alors il faut garder le bouton appuyer.
En fonction de la couleur, il faut relacher quand un numéro est présent dans le décompte:
    - bleu -> 4
    - jaune -> 5
    - reste -> 1
            `}
            </Text>
        </View>
        )
    }
}

export default ButtonGame
        color: THEME_COLOR,