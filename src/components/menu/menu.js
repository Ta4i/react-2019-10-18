import React, {useEffect} from 'react'
import Dish from '../dish'
import PropTypes from 'prop-types'
import {useDispatch, useSelector} from 'react-redux'
import {fetchDishes} from '../../store/ac'
import {selectDishesMap} from '../../store/selectors'

function Menu(props) {
  const {menu} = props
  const dispatch = useDispatch()
  const dishes = useSelector(store => selectDishesMap(store))
  // const
  useEffect(() => {
    dispatch(fetchDishes())
  }, [dispatch])
  if (dishes.loading || !dishes.loaded) {
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
