import { HOMEDATA } from "../action/home";


const intialState = {
    home :[]
}
  

export default (state=intialState,action)=>{
    switch (action.type){
        case HOMEDATA:{
            console.log("reducer 987654",action.home)
            return{
                ...state,
                home:action.home
            }
        }
        default:
            return state;
        }
    }
