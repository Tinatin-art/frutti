import React , {useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateRate } from '../../pages/main/store/ProductSlice';


const Rate = ({rate, id , rateQuantity }) => {

    const dispatch = useDispatch();

    const [rating, setRating] = useState(rate);
    const [hover, setHover] = useState(0);

    console.log(rate)
    console.log(rating)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newRate = {
            id: id,
            rate: rating,
            rateQuantity: rateQuantity + rating,
        }

        dispatch(updateRate({id, newRate}))
    }
  return (
    <>
    <form onSubmit={handleSubmit} className="rating">
        {[...Array(5)].map((star, index) => { 
		index += 1;
		return (    
		    <button
		        type="submit"
		        key={index}
		        className={index <= (hover || rate) ? "onrate" : "offrate"}
		        onClick={() => setRating(index)}
		        onMouseEnter={() => setHover(index)}
		        onMouseLeave={() => setHover(rating)}
		        > 
		    </button>           
		    );
		})}
    </form>
    </>
  )
}

export default Rate