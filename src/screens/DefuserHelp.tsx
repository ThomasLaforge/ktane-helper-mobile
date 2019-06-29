import React, { Component } from 'react'
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { AppProps } from '../../App';

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
        <View style={styles.content}>
            <Image
                // height={Dimensions.get('screen').height}
                // width={Dimensions.get('screen').width}
                style={{flex:1, height: undefined, width: undefined}}
                source={require('../../assets/DefuserHelp/Ports.png')} 
                resizeMode="contain"
            />
        </View>
        )
    }
}

export default DefuserHelp

const styles = StyleSheet.create({
    content: {
        flex: 1
    //     height: Dimensions.get('screen').height,
    //     width: Dimensions.get('screen').width
    }
})