import React from 'react'
import ProductByID from './components/ProductByID'

const ProductDetailPage = () => {
    return (
        <div className="container">
            <div className='detail'>
                <div className='detail__up'>
                    <ProductByID />
                </div>
                {/* <Tabs/> */}
                <div className='detail__down'>
                    {/* <Routes>
                <Route index element={<ProductDescription/>}/>
                <Route path={`description`} element={<ProductDescription/>}/>
                <Route path={`feature`} element={<ProductFeature/>}/>
                <Route path={`comments`} element={<Comments/>}/>
                <Route path={`delivery-terms`} element={<ProductsDeliveryTerms/>}/>
            </Routes>
            <Outlet/> */}
                </div>
                <div className='delivery-recommend'>
                    {/* <ProductsRecommend/> */}
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage