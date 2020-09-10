import React, {  } from 'react'
import { render } from 'react-dom'
import createStore from './store/index'
import App from './components/App'
import Provider from './store/Provider'
import reducer from './store/reducer'
import applyMiddleware from './store/applyMiddleWares'
import promise from 'redux-promise'
import thunk from './store/thunk'
const store = createStore(
  reducer,
  applyMiddleware(thunk,promise)
);
console.log(store.getState().count)   // 1


render(
  <Provider store={store}>
    <App />
  </Provider>

  ,
  document.getElementById('root')
)