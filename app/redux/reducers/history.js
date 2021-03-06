import * as actions from '../actions/history'

const initialState = {
    data: []
};

export default function (state = initialState, action) {
    switch(action.type) {
        case actions.ADD_TO_HISTORY: 
            return {
                ...state,
                data: [...state.data, action.data]
        }
        case actions.CLEAR_HISTORY:
            return {
                ...state,
                data: []
            }
        default:
            return state
    }
}