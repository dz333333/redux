
const createStore = (reducer, enhancer) => {
    let currentState = {}
    let observers = []
    function getState() {
        return currentState
    }
    function dispatch(action) {
        currentState = reducer(currentState, action)
        observers.forEach(func => func())
    }
    function subscribe(func) {
        observers.push(func)
    }
    dispatch({ type: 'REDUX_INIT' })
    if (enhancer) {
        const newCreateStore = enhancer(createStore);
        const newStore = newCreateStore(reducer);
        return newStore;
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}
export default createStore