import React, { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../pages/store/ProductSlice';
import ProductFilters from './components/ProductFilter';

const Products = () => {

    const dispatch = useDispatch();

    const products = useSelector(state => {
        return state.productSlice.products
    })
    
    useEffect(() => {
        dispatch(getProducts())
        
    }, [dispatch])
    
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterSelection = (filterId) => {
        
        if (filterId === 'all') {
            return setSelectedFilters(products)
        } else {
            setSelectedFilters(products.filter((item) => item.element === filterId));
        }
        
    };

  return (
    <div>
        <ProductFilters handleFilterSelection={handleFilterSelection} /> 
        <div className='products'>
            {selectedFilters.length <= 0 ? (
                products && products.map((item) => (
                <ProductCard key={item.id} item={item} />
            ))
            ) : (selectedFilters && selectedFilters.map((item) => (
                <ProductCard key={item.id} item={item} />
            ))
            )}
        </div>
    </div>
  )
}

export default Products