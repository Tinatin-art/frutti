import React from 'react'
import Tabs from '../../../components/tabs/Tabs'
import ProductByID from './ProductByID'
import Header from '../../../components/header/Header'

const ProductFeature = () => {
    return (
        <div className="container">
            <Header/>
            <div className='detail'>
                <div className='detail__up'>
                    <ProductByID />
                </div>
                <Tabs />
                <div className='detail__down'>
                    <div>
                        <table className='feature'>
                            <tbody>
                                <tr>
                                    <th>Артикул</th>
                                    <td>01</td>
                                </tr>
                                <tr>
                                    <th>Энергетическая ценность</th>
                                    <td>47ккал</td>
                                </tr>
                                <tr>
                                    <th>Пищевая ценность в 100 г продукта</th>
                                    <td>углеводы 9,7г</td>
                                </tr>
                                <tr>
                                    <th>Страна</th>
                                    <td>Аргентина</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='delivery-recommend'>
                    {/* There shoud be recommend product */}
                </div>
            </div>
        </div>

    )
}

export default ProductFeature