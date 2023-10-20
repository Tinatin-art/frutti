import React, { useEffect } from 'react'
import ProductCard from './components/ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../pages/main/store/ProductSlice';

const Products = () => {

    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(getProducts())

    }, [dispatch])

    const products = useSelector(state => {
        return state.productSlice.products
    })


  return (
    <div className='products'>
        {products && products.map((item) => (
            <ProductCard key={item.id} item={item} />
        ))}
    </div>
  )
}

export default Products