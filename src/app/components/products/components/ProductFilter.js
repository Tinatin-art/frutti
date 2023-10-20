import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { activeFilter,  } from '../../actions/filtersAction';
import { getProductFilter } from '../../../pages/main/store/ProductSlice';

const ProductFilters = () => {

    const dispatch = useDispatch();
    const productFilter = useSelector((state) => {
        return state.productSlice.productFilter
    })

    useEffect(() => {
        dispatch(getProductFilter())
    }, [dispatch])

    console.log(productFilter)



    // const isActive = (e , id) => {
    //     dispatch(activeFilter(id))

    //     if(id){
    //         e.currentTarget.classList.add("filters__active"); 
    //     }
    // }
  

    // const renderFilters = (arr) => {
    //     // if(arr.length === 0){
    //     //     return <h5>Error</h5>
    //     // }
    //     return arr && arr.map(({id, name}) => {
    //         return <li 
    //             className={`filters__list `} 
    //             key={id}
    //             // onClick={(e) => isActive(e, id)}
    //             >{name}</li>
    //     })
    // }

    // const elements = renderFilters(filters)

    return (
        <>
            <ul className='filters__item'>
                {productFilter && productFilter.map((item) => (
                    <li 
                    className={`filters__list `} 
                    key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}

export default ProductFilters