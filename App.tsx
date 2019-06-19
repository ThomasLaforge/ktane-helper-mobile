import HomeScreen from './src/screens/Home'
import GameSelectorScreen from './src/screens/GameSelector'
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    GameSelector: {screen: GameSelectorScreen},
  },
  {
    initialRouteName: "Home"
  }
);

const App = createAppContainer(MainNavigator);

export default App;

