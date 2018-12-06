export function filterStatusReducer(state = 'SHOW_ALL', action) {
    if (action.type === 'SET_FILTER_STATUS') return action.filterStatus;
    if (action.type === 'HIDE_FORM') return false;
    if (action.type === 'ADD_WORD') return false;
    return state;
}