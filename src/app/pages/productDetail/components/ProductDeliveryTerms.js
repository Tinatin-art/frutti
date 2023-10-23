import React from 'react'
import Tabs from '../../../components/tabs/Tabs'
import ProductByID from './ProductByID'
import Header from '../../../components/header/Header'

const ProductsDeliveryTerms = () => {
  return (

    <div className="container">
      <Header />
      <div className='detail'>
        <div className='detail__up'>
          <ProductByID />
        </div>
        <Tabs />
        <div className='detail__down'>
          <ul className='delivery-terms'>
            <li>Нет минимального заказа</li>
            <li>Бесплатная доставка при заказе от 2500р.</li>
            <li>Бесплатный подъем на этаж</li>
            <li>Доставка осуществляется по Москве и Области</li>
            <li>Нет самовывоза</li>
            <li>Доставка на следующий день при заказе до 18-00</li>
            <li>Доставка день-в-день при заказе до 10-00, по согласованию с менеджером</li>
            <li>Доставка яблок и груш осуществляется ежедневно</li>
          </ul>
        </div>
        <div className='delivery-recommend'>
          {/* There shoud be recommend product */}
        </div>
      </div>
    </div>

  )
}

export default ProductsDeliveryTerms