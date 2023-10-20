import React from 'react'
import pear from "../../../../assets/images/pear.jpg"
import { useNavigate } from 'react-router-dom';
const ProductCard = ({item}) => {

    const navigate = useNavigate()
    const getId = (id) => {
        navigate(`/products/${id.id}`)
    }

    return (
    <div onClick={() => getId(item)} className="products__item">
        <img className='products__item-image' src={pear} alt="products"/>
        <div className='products__item-content'>
            <h2 className='products__item-title'>{item?.name}</h2>
            <p>{item.description}</p>
            <div>
                <span className='price-ttl'>Price</span>
                <span className='price-new'>{item.priceNew}{item.currency}</span>
                <span className='price'><strike>{item.price}{item.currency}</strike></span>
            </div>
            <div >
                <span className='weight-ttl'>Weight:</span>
                <span className='weight'>{item.weight}</span>
            </div>
        </div>
    </div>
  )
}

export default ProductCard