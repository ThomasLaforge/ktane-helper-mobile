import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';
import { Card, Body, CardItem } from 'native-base'
import { AppProps } from '../../App';
import { PasswordsGame } from '../modules/Passwords';

interface HomeProps extends AppProps {
}
interface HomeState {
    pwdGame: PasswordsGame
}

export class Home extends Component<HomeProps, HomeState> {

    constructor(props: HomeProps) {
        super(props)
        this.state = {
            pwdGame: new PasswordsGame([
                ['a', 'b', 'x'],
                ['f', 'd'],
                ['t']
            ])
        }  
    }

    static navigationOptions = {
        title: 'Home',
    };

    renderPwdPossibilities(){
        const strings = this.state.pwdGame.getSubStringsPossibles()
        return strings && strings.map( (p, i) => (
            <Text key={i}>{p}</Text>
        ))
    }
    
    renderPwdPossibleWords(){
        const strings = this.state.pwdGame.getSolutions()
        return strings && strings.map( (p, i) => (
            <Text key={i}>{p}</Text>
        ))
    }

    render() {
        return (
        <View>
            {/* <Button
                title='Go to game selector'
                onPress={() => this.props.navigation.navigate('GameSelector')} 
            /> */}
            <Card>
                <CardItem>
                    <Body>
                        {this.renderPwdPossibilities()}
                    </Body>
                </CardItem>
            </Card>
            <Card>
                {this.renderPwdPossibleWords()}
            </Card>
        </View>
        )
    }
}

export default Home