import React, {useEffect} from 'react'
import Dish from '../dish'
import PropTypes from 'prop-types'
import {useDispatch, useSelector} from 'react-redux'
import {fetchDishes} from '../../store/ac'
import {selectDishes} from '../../store/selectors'
import Loader from '../loader'

function Menu(props) {
  const {menu} = props
  const dispatch = useDispatch()
  const dishes = useSelector(store => selectDishes(store))

  useEffect(() => {
    !dishes.loaded && dispatch(fetchDishes())
  }, [dispatch, dishes.loaded])

  if (dishes.loading || !dishes.loaded) {
    return <Loader />
  }
  return (
    <div className={props.className}>
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
