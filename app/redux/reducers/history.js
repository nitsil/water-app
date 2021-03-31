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
        default:
            return state
    }
}