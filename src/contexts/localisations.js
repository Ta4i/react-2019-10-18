import {createContext} from 'react'

export const translations = {
  en: {
    menu: 'Menu',
    reviews: 'Reviews',
    publishReview: 'Publish Review',
    leaveReview: 'Leave your review',
    pageNotFound: 'Page not found',
    order: 'Order',
  },
  ru: {
    menu: 'Меню',
    reviews: 'Отзывы',
    publishReview: 'Опубликовать отзыв',
    leaveReview: 'Оставьте свой отзыв',
    pageNotFound: 'Страница не найдена',
    order: 'Сделать заказ',
  },
}

export const {Provider, Consumer} = createContext(translations.en)
