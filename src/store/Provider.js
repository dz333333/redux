import React, { createContext } from 'react'
import StoreContext from './context'

const Provider = ({ store, children }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
export default Provider
