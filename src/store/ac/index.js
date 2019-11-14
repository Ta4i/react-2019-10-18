import {
  ADD_REVIEW,
  ADD_TO_CART,
  DECREMENT,
  FETCH_DISHES,
  FETCH_RESTAURANTS,
  FETCH_REVIEWS,
  FETCH_USERS,
  INCREMENT,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from '../common'
import {selectUsersIsLoaded} from '../selectors'

export const START = '_START'

export const SUCCESS = '_SUCCESS'

export const FAIL = '_FAIL'

export const increment = () => ({
  type: INCREMENT,
})

export const decrement = () => ({
  type: DECREMENT,
})

export const addToCart = id => ({
  type: ADD_TO_CART,
  payload: {
    dishId: id,
  },
})

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: {
    dishId: id,
  },
})

export const clearCart = () => ({
  type: CLEAR_CART,
})

export const addReview = (userName, rating, text, restaurantId) => ({
  type: ADD_REVIEW,
  payload: {
    userName,
    rating,
    text,
    restaurantId,
  },
  generateId: true,
  provideUserId: true,
})

export const fetchRestaurants = () => ({
  type: FETCH_RESTAURANTS,
  callAPI: '/api/restaurants',
})

export const fetchReviews = id => ({
  type: FETCH_REVIEWS,
  payload: {
    id,
  },
  callAPI: id ? `/api/reviews?id=${id}` : '/api/reviews',
})

export const fetchDishes = () => async (dispatch, getState) => {
  dispatch({
    type: FETCH_DISHES + START,
  })
  return fetch('/api/dishes')
    .then(res => res.json())
    .then(response => {
      dispatch({
        type: FETCH_DISHES + SUCCESS,
        response: response,
      })
    })
    .catch(e =>
      dispatch({
        type: FETCH_DISHES + FAIL,
        error: e,
      })
    )
}

export const fetchUsers = id => async (dispatch, getState) => {
  dispatch({
    type: FETCH_USERS + START,
    payload: {
      id,
    },
  })
  return fetch(`/api/users?id=${id}`)
    .then(res => res.json())
    .then(response => {
      dispatch({
        type: FETCH_USERS + SUCCESS,
        payload: {
          id,
        },
        response: response,
      })
    })
    .catch(e =>
      dispatch({
        type: FETCH_USERS + FAIL,
        payload: {
          id,
        },
        error: e,
      })
    )
}

export const loadDataForReviews = id => async (dispatch, getState) => {
  const state = getState()
  Promise.all([dispatch(fetchUsers(id)), dispatch(fetchReviews(id))])
}
