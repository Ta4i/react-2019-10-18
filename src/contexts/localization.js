import {createContext} from 'react'

export const locale = {
  ru: {
    menu: 'меню',
    reviews: 'отзывы',
    subTotal: 'подитог',
    total: 'итого',
    deliveryCosts: 'стоимость доставки',
    free: 'бесплатно',
    order: 'перейти к оплате',
    name: 'ваше имя',
    rating: 'рейтинг',
    publishReview: 'опубликовтаь отзыв',
    leaveReview: 'оставьте свой отзыв',
    sendOrder: 'сделать заказ',
    form: 'форма',
    orderCompleteText: 'ваш заказ готовится',
    userThankgiving: 'спасибо',
    notFound: 'страница не найдена',
  },
  en: {
    menu: 'menu',
    reviews: 'reviews',
    subTotal: 'sub-total',
    total: 'total',
    deliveryCosts: 'delivery costs',
    free: 'free',
    order: 'order',
    name: 'your name',
    rating: 'rating',
    publishReview: 'publish review',
    leaveReview: 'leave your review',
    sendOrder: 'send order',
    form: 'form',
    orderCompleteText: 'Your order is preparing',
    userThankgiving: 'thanks',
    notFound: 'page not found',
  },
}

export const AppLocaleContext = createContext(locale.ru)
