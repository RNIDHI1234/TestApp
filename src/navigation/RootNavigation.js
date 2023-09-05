import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';
import MyScree from '../MyScree';

const Stack = createNativeStackNavigator();

const  RootNavigation =()=> {
  return (
 
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="hi" component={MyScree} />

      </Stack.Navigator>
  );
}

export default RootNavigation;