import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import pear from "../../../../assets/images/pear.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { getProductByID } from '../../store/ProductSlice';
import Rate from '../../../components/rate/Rate';



const ProductByID = () => {
    
    const { id } = useParams();
    const dispatch = useDispatch();
	
    const productByID = useSelector((state) => {
        return state.productSlice.productByID
    });

    
    useEffect(() => {
        dispatch(getProductByID(id));

    }, [dispatch, id ]);

 
    const {name, currency, description, weight, weightUnit, madeIn, sku, rateQuantity, price, priceNew, rate} = productByID;


    console.log(rate)
  return (
      
    <>
        <div className='detail__image-wrapper'>
            <div className='detail__image'>
                <img src={pear} alt="product-img" />
            </div>
        </div>
        <div className="detail__product-wrapper">
            <div>
                <h1 className='product__title'>{name}</h1>
                <div className="product__title-details">{madeIn},&nbsp;<span className="product__sku">артикул&nbsp;{sku}</span></div>
                <div className="product__rating-item">
                    <Rate
                        rate={rate} 
                        id={id} 
                        rateQuantity={rateQuantity} 
                     />
                    <span> Здесь количество звездочек {rateQuantity} </span>
                </div>
                <div>
                    <p className="product__old-price">{price}<span>&nbsp;{currency}</span></p>
                    <div className="product__current-price" >{priceNew}<span >&nbsp;{currency}</span></div>
                    <div className="product__measure">цена за {weight} {weightUnit}</div>
                    <p>{description}</p>
                </div>
                <button className="product__buy-btn">Купить</button>
            </div>
        </div>
     
    </>
  )
}

export default ProductByID