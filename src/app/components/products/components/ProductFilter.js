import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductFilter } from '../../../pages/store/ProductSlice';

const ProductFilters = ({ handleFilterSelection }) => {

    const dispatch = useDispatch();
    const productFilter = useSelector((state) => {
        return state.productSlice.productFilter
    })

    useEffect(() => {
        dispatch(getProductFilter())
    }, [dispatch])


    return (
        <>
            <ul className='filters__item'>
                {productFilter && productFilter.map((item) => (
                    <li
                        className='filters__list'
                        key={item.id}
                        onClick={() => handleFilterSelection(item.id)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ProductFilters