export function shouldShowFormReducer(state = [] , action) {
    if (action.type='SHOW_FORM') return true;
    if (action.type='HIDEW_FORM') return false;
    return state;
}