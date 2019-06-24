import HomeScreen from './src/screens/Home'
import GameSelectorScreen from './src/screens/GameSelector'
import DefuserHelpScreen from './src/screens/DefuserHelp'
import { createStackNavigator, createAppContainer, NavigationScreenProps, StackNavigatorConfig, NavigationRouteConfigMap } from 'react-navigation';
import { Component } from 'react';
import { GAMES } from './src/defs';

export interface AppProps extends NavigationScreenProps {
}

let gameScreens = {}
Object.keys(GAMES)
  .filter(gKey => !!GAMES[gKey].screen)
  .forEach(gKey => gameScreens[gKey] = { screen: GAMES[gKey].screen })

const routes: NavigationRouteConfigMap = Object.assign({
  Home: { screen: HomeScreen },
  GameSelector: { screen: GameSelectorScreen },
  DefuserHelp: { screen: DefuserHelpScreen }
}, gameScreens)

const navigatorOptions: StackNavigatorConfig = {
  initialRouteName: "GameSelector",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
};

const MainNavigator = createStackNavigator(routes, navigatorOptions);
const RootNavigator = createAppContainer(MainNavigator);

export default RootNavigator

// export default class App extends Component {
//   render() {
//     return <Provider><RootNavigator /></Provider>
//   }
// }