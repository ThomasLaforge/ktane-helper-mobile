import React, { Component } from 'react'
import { View, Image } from 'react-native';
import { AppProps } from '../../App';
import { Container } from 'native-base';

interface DefuserHelpProps extends AppProps {
}
interface DefuserHelpState {
}

export class DefuserHelp extends Component<DefuserHelpProps, DefuserHelpState> {

    constructor(props: DefuserHelpProps) {
        super(props)
        this.state = {

        }  
    }

    static navigationOptions = {
        title: 'Defuser Help',
    };

    render() {
        return (
        <View>
            <Image
                height={10}
                width={10}
                source={require('../../assets/DefuserHelp/Ports.png')} 
            />
        </View>
        )
    }
}

export default DefuserHelp