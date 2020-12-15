import Home from './pages/Home'
import GlobalStyle from './helpers/globalStyle'
import { useEffect, useState } from 'react'
import * as Constants from './helpers/actions/graphQL/constants'
import axios from 'axios'
import requests from './helpers/requests'

function App() {
  // const [data, setData] = useState({ movies: [] })

  // useEffect(() => {
  //   // GRAPHQL_API
  //   // GET_MOVIES_QUERY

  //   const fetchData = async () => {
  //     const queryResult = await axios.post(Constants.GRAPHQL_API, {
  //       query: Constants.GET_MOVIES_QUERY,
  //     })
  //     const results = queryResult.data.results
  //     setData({ movies: results.films })
  //     console.log('data:', data)
  //   }
  //   fetchData()
  // }, [])

  return (
    <>
      {/* <div>This is the app</div> */}
      <GlobalStyle />
      <Home />
    </>
  )
}

export default App
