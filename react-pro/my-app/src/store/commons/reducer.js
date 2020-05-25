import state from './state'
const reducer = (prevState = state, action) => {
    let new_state = {...prevState};
    switch (action.type) {
        default:
            break;
    }
    return new_state;
}
export default reducer;