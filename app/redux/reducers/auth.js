import * as actions from '../actions/auth'

const initialState = {
    token: null
};

export default function (state = initialState, action) {
    switch(action.type) {
        case actions.SET_TOKEN: 
            return {
                ...state,
                token: action.token
            }
        default:
            return state
    }
}