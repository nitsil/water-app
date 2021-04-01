import * as actions from '../actions/water'

const initialState = {
    waterCups: 0
};

export default function (state = initialState, action) {
    switch(action.type) {
        case actions.DRINK_WATER_CUP: 
            return {
                ...state,
                waterCups: ++state.waterCups
        }
        case actions.CLEAR_WATER_CUPS:
            return {
                ...state,
                waterCups: 0
            }
        default:
            return state
    }
}