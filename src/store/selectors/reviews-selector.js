import {createSelector} from 'reselect'
import {selectUsers} from './users-selector'

const selectReviews = state => state.reviews
const selectReviewIdsFromRestaurant = (_, props) => props.restaurant.reviews

const createSelectReviewsEntitiesByRestaurant = () => {
  return createSelector(
    [selectReviews, selectReviewIdsFromRestaurant, selectUsers],
    (reviews, reviewsIds, users) => {
      return reviews
        .filter(review => reviewsIds.find(id => id === review.id))
        .map(review => {
          const user = users.find(user => user.id === review.userId)
          return {
            ...review,
            userName: user.name,
          }
        })
    }
  )
}

export {createSelectReviewsEntitiesByRestaurant}
