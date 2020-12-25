import {
  ADD_PLANET,
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
      return {
        planets: {
          ...state.planets,
          loading: false,
          isSearchActive: !!payload?.length > 0 || false,
          foundPlanets: state.planets.data.filter((item) => {
            console.log(item)
            return (
              item.name.search(payload) !== -1 ||
              item.climate.search(payload) !== -1 ||
              item.created.search(payload) !== -1 ||
              item.edited.search(payload) !== -1 ||
              item.population.search(payload) !== -1 ||
              item.rotation_period.search(payload) !== -1 ||
              item.surface_water.search(payload) !== -1 ||
              item.terrain.search(payload) !== -1 ||
              item.url.search(payload) !== -1
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
