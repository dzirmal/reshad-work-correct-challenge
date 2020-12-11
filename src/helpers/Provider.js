import React, { createContext, useReducer } from 'react'
import { moviesInitState, planetsInitState } from './initialStates'
import { moviesReducer, planetsReducer } from './reducers'

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
  const [planetsState, planetsDispatch] = useReducer(
    planetsReducer,
    planetsInitState
  )
  const [moviesState, moviesDispatch] = useReducer(
    moviesReducer,
    moviesInitState
  )

  return (
    <GlobalContext.Provider
      value={{
        planetsState,
        planetsDispatch,
        moviesState,
        moviesDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
