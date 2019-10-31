import {restaurants} from '../../fixtures'

// решил сделать редьюсер для блюд. чтобы иметть справочник всех блюд - и каждый раз не лазить в рестораны
export const dishesReducer = (dishesState = null, action) => {
  if (action.type === 'FETCH_DISHES') {
    // в данном примере все блюда уникальные, но может быть и иначе - поэтому нужно собрать только уникальные, простым перебором
    const uniqueDishes = []
    const allDishes = restaurants.reduce(
      (all, item) => [...all, ...item.menu],
      []
    )
    allDishes.forEach(newDish => {
      let alreadyInUnique = false
      uniqueDishes.forEach(addedDish => {
        if (newDish.id === addedDish.id) {
          alreadyInUnique = true
          // тут бы конечно сделать break; но foreach этого не умеет из за коллбеков. не буду на форы уже переписывать
        }
      })
      if (!alreadyInUnique) uniqueDishes.push(newDish)
    })
    return uniqueDishes
  }
  return dishesState
}
