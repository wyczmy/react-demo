import {combineReducers} from 'redux';

const initState = {
    addList:[0,0,0,0]
}

function addSum(state=initState,action){
    console.log("[",action)
    switch (action.type){
        case 'add' : 
            return {
                ...state,
                addList:[...action.payload]
            }
        default : return {...state}
    }
}


export default combineReducers({
    addSum
})