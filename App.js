import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/configureStrore';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Provider store={store}>
          <View />
        </Provider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
