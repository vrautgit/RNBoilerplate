import React from 'react';
import {
  StatusBar,
  View
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/configureStrore';
import Root from './src/components/screen/root';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <View>
        <Provider store={store}>
          <Root />
        </Provider>
      </View>
    </NavigationContainer>
  );
};

export default App;
