import React, { Component } from 'react'
import { Text, Button } from 'react-native';
import { Container, Content } from 'native-base'
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
            <Text>Welcome to ktane helper !</Text>
            <Text>How can I help you ?</Text>
            {/* <Button block info  */}
            <Button title={'I\'m an Expert'}
                onPress={() => this.props.navigation.navigate('GameSelector')}
            />
                {/* <Text>I'm an Expert</Text>
            </Button> */}
            <Button title={'I\'m the Defuser'}
                onPress={() => this.props.navigation.navigate('DefuserHelp')}
            />
        </Content>
        </Container>
        )
    }
}

export default Home