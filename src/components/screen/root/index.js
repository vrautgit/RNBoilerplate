import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../home';
import Login from '../login';
import TabScreens from '../tabScreens';
import styles from './style';

const Stack = createStackNavigator();

class Root extends Component {
  constructor(props) {
    this.state = {

    };
  };

  componentDidMount() {

  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="TabScreens" component={TabScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Root;
