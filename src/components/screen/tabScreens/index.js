import React from 'react';
import { SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { constants } from '../../../config';
import Tab1 from './tab1';
import Tab2 from './tab2';

const { routes } = constants;

const Tab = createBottomTabNavigator();

const TabScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.Tab1} component={Tab1} />
      <Tab.Screen name={routes.Tab2} component={Tab2} />
    </Tab.Navigator>
  );
};

export default TabScreens;
