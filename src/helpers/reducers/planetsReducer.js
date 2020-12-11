import {
  PLANETS_LOADING,
  PLANETS_LOAD_ERROR,
  PLANETS_LOAD_SUCCESS,
  SEARCH_PLANETS,
} from '../actions'

const planets = (state, { payload, type }) => {
  switch (type) {
    case PLANETS_LOADING: {
      return {
        ...state,
        planets: {
          ...state.planets,
          loading: true,
        },
      }
    }

    case PLANETS_LOAD_SUCCESS: {
      return {
        ...state,
        planets: {
          ...state.planets,
          loading: false,
          data: payload,
        },
      }
    }

    case PLANETS_LOAD_ERROR: {
      return {
        ...state,
        planets: {
          ...state.planets,
          loading: false,
          error: payload,
        },
      }
    }

    case SEARCH_PLANETS: {
      const searchValue = payload?.toLowerCase()

      console.log(' payload.toLowerCase():', payload?.toLowerCase())

      return {
        planets: {
          ...state.planets,
          loading: false,
          isSearchActive: !!payload?.length > 0 || false,
          foundPlanets: state.planets.data.filter((item) => {
            return (
              item.name.toLowerCase().search(searchValue) !== -1 ||
              item.climate.toLowerCase().search(searchValue) !== -1 ||
              item.created.toLowerCase().search(searchValue) !== -1 ||
              item.edited.toLowerCase().search(searchValue) !== -1 ||
              item.films.toLowerCase().search(searchValue) !== -1 ||
              item.orbital_period.toLowerCase().search(searchValue) !== -1 ||
              item.population.toLowerCase().search(searchValue) !== -1 ||
              item.residents.toLowerCase().search(searchValue) !== -1 ||
              item.rotation_period.toLowerCase().search(searchValue) !== -1 ||
              item.surface_water.toLowerCase().search(searchValue) !== -1 ||
              item.terrain.toLowerCase().search(searchValue) !== -1 ||
              item.url.toLowerCase().search(searchValue) !== -1
            )
          }),
        },
      }
    }
    default:
      return state
  }
}

export default planets
