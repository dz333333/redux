import React, { useContext, useEffect } from 'react';
import connect from '../store/connect'


const Home = (props) => {
    useEffect(() => {
        fetch('/api').then(res => {
            console.log(res, 'res');
        })
    }, [])
    return (
        <div>
            home <br />
            <button onClick={() => { props.add(1) }}>increament</button>
            <button onClick={() => { props.reduce(1) }}>decrement</button>
            {props.count}
        </div>
    );
};
function mapStateToProps(state) {
    return {
        count: state.count,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        add: (num) => {
            dispatch((dispatch,getState) => { dispatch({ type: 'increament', payload: num }) ;console.log(getState(),'state');})
        },
        reduce: (num) => {
            dispatch({ type: 'decrement', payload: num })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);