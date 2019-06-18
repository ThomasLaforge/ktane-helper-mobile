import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component <{}, {cpt: number, intervalId: number}>{

  constructor(props: any){
    super(props)
    this.state = {
      cpt: 0,
      intervalId: null
    }
  }

  componentDidMount(){
    const intervalId = setInterval( () => {
      this.setState({ cpt: this.state.cpt + 1 })
    }, 1000)
    this.setState({ intervalId })
  }

  onPressButton = () => {
    clearInterval(this.state.intervalId)
    this.setState({ intervalId: null })
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>cpt : {this.state.cpt}</Text>
        <Button 
          title='Stop' 
          onPress={this.onPressButton} 
          disabled={!this.state.intervalId}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
