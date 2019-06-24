import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import { AppProps } from '../../../App';
import { View, Switch, Text, ListItem, Left, Button, Icon, Body, Right } from 'native-base';
import { ComplexStringColor, ComplexStringsGame } from '../../modules/ComplexStrings';
import { TouchableHighlight } from 'react-native-gesture-handler';
import ColorPalette from 'react-native-color-palette'

interface ComplexStringsProps extends AppProps {
}
interface ComplexStringsState {
    ledOn: boolean,
    hasStar: boolean,
    hasParralelPort: boolean,
    lastSerialNumberDigitIsEven: boolean,
    hasMoreThanOneBattery: boolean,
    color: ComplexStringColor,
    selectedColor: string
}

export default class ComplexStrings extends Component<ComplexStringsProps, ComplexStringsState> {

    constructor(props: ComplexStringsProps) {
        super(props)
        this.state = {
            hasParralelPort: false,
            lastSerialNumberDigitIsEven: false,
            hasMoreThanOneBattery: false,
            hasStar: false,
            ledOn: false,
            color: ComplexStringColor.Any,
            selectedColor: undefined
        }  
    }

    get colorsHex(){
        return ['#2980B9', '#C0392B', '#9B59B6', '#FFFFFF']
    }

    static navigationOptions = {
        title: 'Complex Strings',
    };

    pressColor(color: ComplexStringColor){
        this.setState({ color })
    }

    renderColorForm(){
        type FormColor = {
            value: ComplexStringColor;
            name: string;
            style: any;
        };

        const colors: FormColor[] = [
            { value: ComplexStringColor.Any, name: 'Any', style: styles.colorAny },
            { value: ComplexStringColor.Blue, name: 'Blue', style: styles.colorBlue },
            { value: ComplexStringColor.Red, name: 'Red', style: styles.colorRed },
            { value: ComplexStringColor.RedAndBlue, name: 'Red and Blue', style: styles.colorRedBlue },
        ]

        return <View style={styles.colorForms}>
            {colors.map( (c, k) => (
                <TouchableHighlight key={k} onPress={() => this.pressColor(c.value)}>
                    <View style={styles.colorFormElt}>
                        <Text>{c.name}</Text>
                    </View>
                </TouchableHighlight>
            ))}
        </View>
    }

    renderSolution(){
        const { 
            hasParralelPort, 
            lastSerialNumberDigitIsEven, 
            hasMoreThanOneBattery,
            hasStar,
            ledOn,
            color
        } = this.state

        const game = new ComplexStringsGame(hasParralelPort, lastSerialNumberDigitIsEven, hasMoreThanOneBattery)
        
        return <View style={styles.solution}>
            <Text>{game.resolveString(color, hasStar, ledOn) ? 'Cut !' : 'Don\'t cut !'}</Text>
        </View>
    }

    render() {
        return (
        <View>
            <View style={styles.switches}>
                <ListItem>
                    <Body>
                        <Text>Has Parralel Port</Text>
                    </Body>
                    <Right>
                        <Switch
                            style={styles.switchesElt} 
                            value={this.state.hasParralelPort}
                            onValueChange={() => this.setState({ hasParralelPort: !this.state.hasParralelPort})}
                        />
                    </Right>
                </ListItem>
                    
                <ListItem>
                    <Body>
                        <Text>Has More Than One Battery</Text>
                    </Body>
                    <Right>
                        <Switch 
                            style={styles.switchesElt} 
                            value={this.state.hasMoreThanOneBattery}
                            onValueChange={() => this.setState({ hasMoreThanOneBattery: !this.state.hasMoreThanOneBattery})}
                        />
                    </Right>
                </ListItem>
                
                <ListItem>
                    <Body>
                        <Text>Last Serial Number Digit Is Even</Text>
                    </Body>
                    <Right>
                        <Switch 
                            style={styles.switchesElt} 
                            value={this.state.lastSerialNumberDigitIsEven}
                            onValueChange={() => this.setState({ lastSerialNumberDigitIsEven: !this.state.lastSerialNumberDigitIsEven})}
                        />
                    </Right>
                </ListItem>

                <ListItem>
                    <Body>
                        <Text>Has Star</Text> 
                    </Body>
                    <Right>
                        <Switch 
                            style={styles.switchesElt} 
                            value={this.state.hasStar}
                            onValueChange={() => this.setState({ hasStar: !this.state.hasStar})}
                        />
                    </Right>
                </ListItem>

                <ListItem>
                    <Body>
                        <Text>Led On</Text>
                    </Body>
                    <Right>
                        <Switch 
                            style={styles.switchesElt} 
                            value={this.state.ledOn}
                            onValueChange={() => this.setState({ ledOn: !this.state.ledOn})}
                        />
                    </Right>
                </ListItem>
            </View>
            <View style={{height: 80, marginTop: 20}}>
                <ColorPalette
                    onChange={color => this.setState({selectedColor: color})}
                    value={this.state.selectedColor}
                    colors={this.colorsHex}
                    title={"String Color"}
                />
            </View>
            {this.renderSolution()}
        </View>
        )
    }
}

const styles = StyleSheet.create({
    switches: {
      display: 'flex',
      flexDirection: 'column'
    },
    switchesElt: {

    },
    colorFormElt: {},
    colorForms: {},
    colorAny: {},
    colorBlue: {},
    colorRed: {},
    colorRedBlue: {},
    solution: {
        width: Dimensions.get('screen').width,
        textAlign: 'center'
    }
  });