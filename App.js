import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewScreen from './screens/NewScreen';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="NewScreen" component={NewScreen} />
        <Tab.Screen name="ScreenOne" component={ScreenOne} />
        <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
