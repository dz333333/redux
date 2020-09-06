const initialState = {
    count: 0,
    num:1
}
const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'increament':
            return {
                ...state,
                count: state.count + payload
            }
        case 'decrement':
            return {
                ...state,
                count: state.count - payload
            }
        default:
            return initialState;
    }
}
export default reducer