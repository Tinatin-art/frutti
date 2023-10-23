import React from 'react'
import ProductByID from './components/ProductByID'
import Tabs from '../../components/tabs/Tabs'
import Header from '../../components/header/Header'

const ProductDetailPage = () => {
    return (
        <div className="container">
            <Header />
            <div className='detail'>
                <div className='detail__up'>
                    <ProductByID />
                </div>
                <Tabs/>
                <div className='detail__down'>
                    <div>
                    <p>Цена за упаковку. Вес одной упаковки 500-600 г. Особенно сладкий и ароматный сорт клубники, всем известной ягоды, ассоциирующейся с летней прохладой и нежностью. Богата витаминами и клетчаткой.</p>
                    </div>
                </div>
                <div className='delivery-recommend'>
                    {/* There shoud be recommend product */}
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage