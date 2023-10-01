import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'
import Screen4 from './Screen4'
import Screen5 from './Screen5'
import Screen6 from './Screen6'
import Screen7 from './Screen7'
import Screen8 from './Screen8'
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Screen3" >
        <Drawer.Screen name="Home" component={BottomTabNavigator}  />
        <Drawer.Screen name="Screen1" component={Screen1} />
        <Drawer.Screen name="Screen2" component={Screen2} />
        <Drawer.Screen name="Screen3" component={Screen3} />
        <Drawer.Screen name="Screen4" component={Screen4} />
        <Drawer.Screen name="Screen5" component={Screen5} />
        <Drawer.Screen name="Screen6" component={Screen6} />
        <Drawer.Screen name="Screen7" component={Screen7} />
        <Drawer.Screen name="Screen8" component={Screen8} />
      </Drawer.Navigator>
    </NavigationContainer>

    // <Screen1/>
    // <Screen2/>
    // <Screen4/>
    // <Screen5/>
  );
}
export default App;
