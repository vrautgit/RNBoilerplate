import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/configureStrore';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Provider store={store}>
          <View />
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
