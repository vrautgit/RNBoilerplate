import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

import RootNavigation from './components/navigations/RootNavigation';

const store = configureStore();

class RNBoilerplate extends Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <View style={styles.rootView}>
                <Provider store={store}>
                    <RootNavigation onNavigationStateChange={null} />
                </Provider>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rootView: {
        flex: 1
    }
});


AppRegistry.registerComponent('RNBoilerplate', () => RNBoilerplate);
