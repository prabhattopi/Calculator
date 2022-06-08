import { CLEAR_COUNT, COUNTER_ADD, COUNTER_DECREMENT, COUNTER_DIVIDE, COUNTER_INCREMENT, COUNTER_MULTIPLY, COUNTER_SUB } from "./actiontype";

let initialState={
    count:0,
   

}

export const reducer=(state=initialState,action)=>{
    console.log(state,action)
 
    switch(action.type){
        case COUNTER_INCREMENT:{ state.count++; return{...state}}
        case COUNTER_DECREMENT:{ state.count--; return{...state}}
        case COUNTER_ADD: {state.count=state.count+action.payload; return{...state}}
        case COUNTER_SUB:{state.count=state.count-action.payload; return{...state}}
        case COUNTER_MULTIPLY:{state.count=state.count*action.payload; return{...state}}
        case COUNTER_DIVIDE:{if(action.payload!==0){state.count=state.count/action.payload;
          
            return{...state}}
            else{
            state.count=Infinity
            return{...state}
            }
         
        }
        case CLEAR_COUNT:{state.count=0;
        return{...state}} 
       
        default:{
            return state
        }

    }
   
}