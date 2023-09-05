import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text
} from 'react-native';

import homeReducer from './src/redux/reducer/home'
import { applyMiddleware, combineReducers,createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux'
import AppNavigation from './src/navigation/AppNavigation';
import HomeScreen from './src/HomeScreen';


const rootreducer = combineReducers({
  home:homeReducer,
})
// seprate navigation
const store = createStore(rootreducer,applyMiddleware(ReduxThunk))
const App = ()=>{
  return(
      <SafeAreaView style={styles.container}>
       {/* <Provider store={store}>  */}
       <HomeScreen/>
        <View style={{width:'100%',height:"50%",backgroundColor:'pink'}}>
        <Text onPress={()=>alert('hi')}>Hiiii Nidhi</Text>
       </View>
       <View style={{width:'100%',height:"50%",backgroundColor:'blue',borderWidth:1,padding:10}}>
       <AppNavigation/>

       </View> 
      {/* </Provider> */}

    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  container: {
     flex: 1,
  
  },
  image: {
    width:200,
    height: 400,
  },

});
export default App;
