import axios from "axios"

export const HOMEDATA = 'HOMEDATA'


export const getHomedata = ()=>{
    return async dispatch  => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            const result = response.data

           

            console.log("RESULT===================",result)

            // if(result.status){
                dispatch({
                    type:HOMEDATA,
                    home :result
                })
            // }
            // else{
            //     throw new Error('Something went Wrong')
            // }
        }
    
 
}