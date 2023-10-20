import React from 'react';
import Header from '../../components/header/Header';
import Products from '../../components/products/Products';


const MainPage = () => {
    
    return (
        <>
            <div className="container">
                <div className='main'>
                    <Header/>
                    <main className='main__inner'>
                        <div className='main__left'>
                         
                            {/* <FiltersByPrice/> */}
                        </div>
                        <div className="main__right">
                            {/* <Filters/> */}
                            <Products/>
                        </div>
                    </main>
		            {/* <Footer/>  */}
                </div>
            </div>
        </>
        );
}


export default MainPage;