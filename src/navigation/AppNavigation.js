import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './RootNavigation';
import BottomNavigation from './BottomNavigation';


const AppNavigation = () => {
  
  return (
    <NavigationContainer>
      {/* <RootNavigation/> */}
    <BottomNavigation/>
    </NavigationContainer>
  );
};

export default AppNavigation;
