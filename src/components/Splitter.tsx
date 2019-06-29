import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { AppProps } from '../../App';

export interface SplitterProps extends AppProps {
    marginVertical?: number
}

export default class Splitter extends Component<SplitterProps, {}> {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={[{ marginTop: this.props.marginVertical || 10}, styles.splitter]} />
        )
    }
}

const styles = StyleSheet.create({
    splitter: {
        borderWidth: 1,
        borderColor: '#d6d7da',
        borderRadius: 5
    }
})
