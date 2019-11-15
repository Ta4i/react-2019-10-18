import {
  ADD_REVIEW,
  ADD_TO_CART,
  DECREMENT,
  FETCH_DISHES,
  FETCH_RESTAURANTS,
  FETCH_REVIEWS,
  INCREMENT,
  REMOVE_FROM_CART,
} from '../common'

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

export const fetchReviews = () => ({
  type: FETCH_REVIEWS,
  callAPI: '/api/reviews',
})

export const fetchDishes = () => (dispatch, getState) => {
  dispatch({
    type: FETCH_DISHES + START,
  })
  fetch('/api/dishes')
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
