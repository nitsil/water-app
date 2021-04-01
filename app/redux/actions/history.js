export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
export const CLEAR_HISTORY = 'CLEAR_HISTORY'

export function addToHistory(data) {
    return {
        type: ADD_TO_HISTORY,
        data
    }
}

export function clearHistory() {
    return {
        type: CLEAR_HISTORY
    }
}