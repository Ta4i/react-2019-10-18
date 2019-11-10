import React, {useEffect} from 'react'
import Dish from '../dish'
import PropTypes from 'prop-types'
import {useDispatch, useSelector} from 'react-redux'
import {fetchDishes} from '../../store/ac'
import {
  selectDishesMapLoading,
  selectDishesMapLoaded,
} from '../../store/selectors'

function Menu(props) {
  const {menu} = props
  const dispatch = useDispatch()
  const loading = useSelector(store => selectDishesMapLoading(store))
  const loaded = useSelector(store => selectDishesMapLoaded(store))

  useEffect(() => {
    dispatch(fetchDishes())
  }, [dispatch])

  if (loading || !loaded) {
    return <h2>Loading...</h2>
  }
  return (
    <div>
      {menu.map(dishId => (
        <Dish dishId={dishId} key={dishId} />
      ))}
    </div>
  )
}

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Menu
