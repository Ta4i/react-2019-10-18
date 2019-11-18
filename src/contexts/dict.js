import React, {createContext} from 'react'
import {Typography} from 'antd'

export const dict = {
  ru: {
    Menu: 'Меню',
    Reviews: 'Отзывы',
    PublishReview: 'Опубликовать отзыв',
    LeaveReview: 'Оставьте свой отзыв',
  },
  en: {
    Menu: 'Menu',
    Reviews: 'Reviews',
    PublishReview: 'Publish Review',
    LeaveReview: 'Leave your review',
  },
}

export const {Provider, Consumer} = createContext(dict.ru)
