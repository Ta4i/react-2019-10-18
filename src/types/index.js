import PropTypes from 'prop-types'

const {shape, number, string, arrayOf} = PropTypes

export const reviewType = shape({
  id: string,
  user: string,
  text: string,
  rating: number,
})

export const dishType = shape({
  id: string,
  name: string,
  price: number,
  ingredients: arrayOf(string),
})
