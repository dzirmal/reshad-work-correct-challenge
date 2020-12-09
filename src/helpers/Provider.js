import React, { createContext, useReducer } from 'react'
import {
  filmsInitState,
  homeCardsInitState,
  peopleInitState,
  planetsInitState,
} from './initialStates'
import { planets, films, people, homeCards } from './reducers'

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
  const [planetsState, planetsDispatch] = useReducer(planets, planetsInitState)
  const [filmsState, filmsDispatch] = useReducer(films, filmsInitState)
  const [peopleState, peopleDispatch] = useReducer(people, peopleInitState)
  const [homeCardsState, homeCardsDispatch] = useReducer(
    homeCards,
    homeCardsInitState
  )

  return (
    <GlobalContext.Provider
      value={{
        planetsState,
        planetsDispatch,
        filmsState,
        filmsDispatch,
        peopleState,
        peopleDispatch,
        homeCardsState,
        homeCardsDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
