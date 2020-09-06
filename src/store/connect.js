
import React, { Component, useContext, useState } from 'react'
import StoreContext from './context'
function connect(mapStateToProps, mapDispatchToProps) {
    return function (WrappedComponent) {
        const Connect = () => {
            const storeContext = useContext(StoreContext);
           
            const [state,setState]=useState(mapStateToProps(storeContext.getState()))
            const [mapDispatch]=useState(mapDispatchToProps(storeContext.dispatch))
            storeContext.subscribe(() =>setState(storeContext.getState()))
            return <WrappedComponent {...state} {...mapDispatch}></WrappedComponent>
        }
        return Connect
    }

}
export default connect
