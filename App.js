import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet
} from 'react-native';

import homeReducer from './src/redux/reducer/home'
import { applyMiddleware, combineReducers,createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux'
import AppNavigation from './src/navigation/AppNavigation';


const rootreducer = combineReducers({
  home:homeReducer,
})

const store = createStore(rootreducer,applyMiddleware(ReduxThunk))
const App = ()=>{
  return(
      <SafeAreaView style={styles.container}>
       <Provider store={store}> 
      <AppNavigation/>
      </Provider>

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
