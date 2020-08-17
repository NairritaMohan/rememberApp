import * as React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import PickerScreen from './screens/PickerScreen';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';



export default class App extends React.Component {
  render() {
    return (

      <
      AppContainer / >

    )
  }
}

const switchNavigator = createSwitchNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  AddScreen: {
    screen: AddScreen
  },
  PickerScreen : {
    screen : PickerScreen
  }
})

const AppContainer = createAppContainer(switchNavigator)