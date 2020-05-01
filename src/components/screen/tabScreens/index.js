import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1 from './tab1';
import Tab2 from './tab2';

const Tab = createBottomTabNavigator();

const TabScreens = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tab1" component={Tab1} />
        <Tab.Screen name="Tab2" component={Tab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabScreens;
