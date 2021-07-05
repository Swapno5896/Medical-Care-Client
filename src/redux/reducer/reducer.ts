import { Action } from "../actionType/actionType";
import { Types } from "../types/types";
import { combineReducers } from 'redux'

const initalMoneStae = { money: 2 };
const initalBlogStae = { blog: [],isLoading:true }

const moneyReducer = (state = initalMoneStae, action: Action) => {
    switch (action.type) {
        case Types.INCREMENT:
            return {
                ...state, money: state.money + action.payload
            }


        case Types.DECREMENT:
            return {
                ...state, money: state.money - action.payload
            }

        default:
            return state
    }
}

// export default moneyReducer;
const blogReducer = (state = initalBlogStae, action: Action) => {
    switch (action.type) {
        case Types.LOAD_BLOG :
            return {
                ...state, blog : action.payload
                }
         case Types.LOADING :
            return {
                        ...state, isLoading : action.payload
                 }
        
        default:
            return state
    }
}

const rootReducer = combineReducers({
    money: moneyReducer, blog: blogReducer
})

export default rootReducer;