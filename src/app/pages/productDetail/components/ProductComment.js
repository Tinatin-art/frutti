import React from 'react'
import Comments from '../../../components/comment/Comments'
import ProductByID from './ProductByID'
import Tabs from '../../../components/tabs/Tabs'
import Header from '../../../components/header/Header'

const ProductComment = () => {
    return (
        <div className="container">
            <Header />
            <div className='detail'>
                <div className='detail__up'>
                    <ProductByID />
                </div>
                <Tabs />
                <div className='detail__down'>
                    <Comments />
                </div>
                <div className='delivery-recommend'>
                    {/* There shoud be recommend product */}
                </div>
            </div>
        </div>
    )
}

export default ProductComment