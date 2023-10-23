import React from 'react'
import { NavLink, useParams, useLocation} from 'react-router-dom';

const Tabs = () => {
    
    const {id} = useParams();
    const location = useLocation();

    let activeDescription = location.pathname === `/products/${id}` ? 'react-tabs__tab--selected' : '';
    let activeFeature = location.pathname === `/products/${id}/feature` ? 'react-tabs__tab--selected' : '';
    let activeComments = location.pathname === `/products/${id}/comments` ? 'react-tabs__tab--selected' : '';
    let activeDeliveryTerms = location.pathname === `/products/${id}/delivery-terms` ? 'react-tabs__tab--selected' : '';

  return (
    <>
        <ul className="react-tabs__tab-list ">
            <NavLink to={`/products/${id}`} className={`react-tabs__tab ${activeDescription}`}>Описание</NavLink>
            <NavLink to={`/products/${id}/feature`} className={`react-tabs__tab ${activeFeature}`}>Характеристики</NavLink>
            <NavLink to={`/products/${id}/comments`} className={`react-tabs__tab ${activeComments}`}>Отзывы</NavLink>
            <NavLink to={`/products/${id}/delivery-terms`} className={`react-tabs__tab ${activeDeliveryTerms}`}>Условия доставки</NavLink>
        </ul>
    </>
  )
}

export default Tabs