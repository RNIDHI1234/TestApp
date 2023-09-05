import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch ,useSelector} from 'react-redux';
import * as homeActions from './redux/action/home';



 const HomeScreen=()=>{
    const[loading,setLoading] = useState(false)
    const[error,setError] = useState(null)

    const dispatch =useDispatch()


    const{home} = useSelector(state=>state.home)

    console.log('HOME DATA ON SCREEN',home)
 


 useEffect(async()=>{
    setLoading(true)
    setError(null)
    try{

        await dispatch(homeActions.getHomedata())
    }catch(error){
        throw new error("i am screem")

    }



 },[])


    return (
      <View style={{backgroundColor:'red',flex:1}}>
        <Text> Hi </Text>
      </View>
    )
  
}

export default HomeScreen
