import React from 'react';
import Header from '../../components/header/Header';


const MainPage = () => {
    
    return (
        <>
            <div className="container">
                <div className='main'>
                    <Header/>
                    <main className='main__inner'>
                        <div className='main__left'>
                            {/* <Search/> */}
                            {/* <FiltersByPrice/> */}
                        </div>
                        <div className="main__right">
                            {/* <Filters/> */}
                            {/* <ProductCards/> */}
                        </div>
                    </main>
		            {/* <Footer/>  */}
                </div>
            </div>
        </>
        );
}


export default MainPage;