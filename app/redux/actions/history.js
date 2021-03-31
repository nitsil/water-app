export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';

export function addToHistory(data) {
    return {
        type: ADD_TO_HISTORY,
        data
    }
}