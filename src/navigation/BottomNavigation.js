import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import MyScree from '../MyScree';

const Tab = createBottomTabNavigator();

 const BottomNavigation=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="hi" component={MyScree} />
      <Tab.Screen name="Settings" component={HomeScreen} />
      <Tab.Screen name="ui" component={HomeScreen} />
      <Tab.Screen name="ttt" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;