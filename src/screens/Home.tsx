import React, { Component } from 'react'
import { StyleSheet, Dimensions, View } from 'react-native';
import { Text, Container, Content, Button } from 'native-base'
import { AppProps } from '../../App';

interface HomeProps extends AppProps {
}
interface HomeState {
}

export class Home extends Component<HomeProps, HomeState> {

    constructor(props: HomeProps) {
        super(props)
        this.state = {

        }  
    }

    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
        <Container>
        <Content>
            <Text style={styles.h1}>Welcome to ktane helper !</Text>
            <Text style={styles.helpSentence}>How can I help you ?</Text>
            {/* <Button block info  */}
            <View style={styles.buttons}>
                <Button block info
                    style={styles.buttonsElt}
                    onPressIn={() => this.props.navigation.navigate('GameSelector')}
                >
                    <Text>I'm an Expert</Text>
                </Button>
                <Button block info
                    style={styles.buttonsElt}
                    onPressIn={() => this.props.navigation.navigate('DefuserHelp')}
                >
                    <Text>I'm the Defuser</Text>
                </Button>
            </View>
        </Content>
        </Container>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    h1: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20
    },
    helpSentence: {
        textAlign: 'center',
        marginVertical: 30
    },
    buttons: {
        paddingHorizontal: 20
    },
    buttonsElt: {
        marginVertical: 30,
        // width: Math.floor(Dimensions.get('screen').width * 80 / 100)
    }
})