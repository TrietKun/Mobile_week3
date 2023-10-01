// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'
import Screen4 from './Screen4'

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
    //   screenOptions={({ route }) => ({
    //   tabBarVisible: route.name !== 'Screen1', // Ẩn thanh tab cho màn hình "Screen1"
    // })}
    >
      <Tab.Screen name="Screen1" component={Screen1}  />
      <Tab.Screen name="Screen2" component={Screen2}  />
      <Tab.Screen name="Screen3" component={Screen3} />
      <Tab.Screen name="Screen4" component={Screen4} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
