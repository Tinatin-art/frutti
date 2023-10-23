import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { createComment } from '../../pages/store/CommentSlice';


const AddComment = () => {

    const dispatch = useDispatch();
    const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
    const [textComment, setTextComment] = useState('');

    const isTextareDisabled = textComment.length === 0;

    const handleTextarea = (e) => {
        setTextComment(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const newComment = {
            id: uniqid(),
            text: textComment,
            rate: rating,
            createdOnUtc: "2022-01-10T12:43:51.2065601",
            totalLiked: 0,
            totalDisliked: 0
        }

        dispatch(createComment({newComment}));
        setTextComment('')
		setRating(0);
		setHover(0);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <ul className="comments__user-rate">
		        		{[...Array(5)].map((star, index) => { 
		        			index += 1;       
		        			return (    
		        				<button
		        					type="button"
		        					key={index}
		        					className={index <= (hover || rating) ? "onrate" : "offrate"}
		        					onClick={() => setRating(index)}
		        					onMouseEnter={() => setHover(index)}
		        					onMouseLeave={() => setHover(rating)}
		        				> 
		        				</button>           
		        			);
		        		})}
		        	</ul>
                <textarea 
                    className='comments__textarea' 
                    placeholder='Leave a comment' 
                    value={textComment} 
                    style={{"width": "100%"}} rows="5" 
                    onChange={handleTextarea}
                    />
                <button disabled={isTextareDisabled} className='comments__add-btn' type='submit'>Add comment</button>
            </form>
        </>
    )
}

export default AddComment