import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    YellowBox
} from 'react-native';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

import RootNavigation from './components/navigations/RootNavigation';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

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
