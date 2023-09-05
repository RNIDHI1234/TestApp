import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, TouchableOpacity ,Alert} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as homeActions from './redux/action/home';



const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // const dispatch =useDispatch()


  // const{home} = useSelector(state=>state.home)

  // console.log('HOME DATA ON SCREEN',home)



  //  useEffect(async()=>{
  //     setLoading(true)
  //     setError(null)
  //     try{

  //         await dispatch(homeActions.getHomedata())
  //     }catch(error){
  //         throw new error("i am screem")

  //     }



  //  },[])


  const myfunc = ()=>{
    console.log("hiii success")
    
  }

  return (
    <View style={{flex:1,backgroundColor:'orange',alignContent:'center',width:100,height:40,padding:20,justifyContent:'center'} }>
      <Pressable style={{ backgroundColor: 'red' }} onPress={()=>navigation.navigate("hi")}>
        <Text> Hello </Text>
      </Pressable>
    </View>
  )

}

export default HomeScreen
