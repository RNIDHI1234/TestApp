import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';

const Tab = createBottomTabNavigator();

 const BottomNavigation=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
      <Tab.Screen name="ui" component={HomeScreen} />
      <Tab.Screen name="ttt" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;