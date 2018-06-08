import { createStackNavigator } from 'react-navigation';
import Home from '../screens/home/Home';
import TabNav from '../navigations/TabbarNavigation';

const RootNavigation = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    TabNav: {
        screen: TabNav,
        navigationOptions: {
            header: null
        }
    }
});

export default RootNavigation;