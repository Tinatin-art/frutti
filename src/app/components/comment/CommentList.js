import React, { useEffect, useRef, useState} from 'react'
import { useDispatch } from 'react-redux';
import { deleteComment, patchLike, updateComment } from '../../pages/store/CommentSlice';

const CommentList = ({item}) => {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const saveBtnRef = useRef();
    const [commentText, setCommentText] = useState('');

    const isTextareDisabled = commentText.length === 0;
    const {text, id, rate, isLiked, totalLiked, totalDisliked} = item;

    const onLiked = ( like , id) => {

        const newComment = {
            id: id,
            isLiked: like,
            totalLiked: totalLiked + (like === true ? 1 : null),
            totalDisliked: totalDisliked + (like === false ? 1 : null),
        }

		dispatch(patchLike({newComment, id }));
	};
	
    const clickLike = (id) => {
		onLiked( true, id);
	};
	
	const clickDislike = (id) => {
		onLiked( false, id);
	};

    useEffect(() => {
        if(text){
          setCommentText(text);
        }
    }, [text]);

    const handleInput = (e) => {
        setCommentText(e.target.value);
    }

    const handleUpdate = (e) => {
        e.preventDefault();

        inputRef.current.setAttribute("readonly", "readonly");
        inputRef.current.classList.remove('active-input');
        saveBtnRef.current.style.display = "none";

        const newComment = {
            id: id,
            text: commentText
        }
      dispatch(updateComment({newComment, id}))
    }
   
    const  handleDelete = () => {
        dispatch(deleteComment(id));
        
    }

    function handleUpdateBtn() {
        inputRef.current.removeAttribute("readonly") 
        inputRef.current.classList.add('active-input')
        saveBtnRef.current.style.display = "block";
    }
 
  return (
    <form onSubmit={handleUpdate} className='comments__item'>
        <div className="comments__item-inner">
            <div className="comments__user">
                <div className="comments__user-img">
                    <img src="https://storage.delikateska.ru/cache/3/a/edff6b02-b78e-4ea5-8dc5-c4a31c5177e8.jpg/d44.webp" alt="user"/>
                </div>
                <div>
                    <p className="comments__user-name">Кругова Наталья</p>
                    <div className="comments__user-rating-wrapper">
                        <div className="comments__user-rating">
                            <ul className='comments__user-rate'>
                                {[...Array(5)].map((star, index) => {
                                    if(index >= rate){
                                        return (
                                            <li className='offrates' key={index}></li>
                                        );
                                    }else {
                                        return (
                                            <li className='onrate' key={index}></li>
                                        )
                                    }
                                })}
                            </ul>
                        Отличный магазин!</div>
                    </div>
                </div>
            </div>
            <div className='comments__input-wrapper'>
                <div className='comments__input-wrapper'>
                    <textarea 
                        className='comments__item-textarea' 
                        type="text" 
                        value={commentText} 
                        onChange={handleInput}
                        readOnly
                        ref={inputRef}
                        />
                    <button 
                        disabled={isTextareDisabled}
                        ref={saveBtnRef} 
                        className='comments__save-btn' 
                        type="submit">Сохранить</button>    
                </div>
                <div className="comments__like-dislike-wrapper">
                    <div className="comments__like">
                        <span className={`${isLiked === true ? "count-blue" : "count"}`}>{totalLiked}</span>
                        <button
                            type="button" 
							className={`${isLiked === true ? "thum-up-blue" : "thum-up"}`}
							onClick={() => clickLike(id)}
                        ></button>
                    </div>
                    <div className="comments__dislike">
                        <span className={`${isLiked === false ? "count-red" : "count"}`}>{totalDisliked}</span>
                        <button
                            type="button"  
							className={isLiked === false ? "thum-down-red" : "thum-down"}	
							onClick={() => clickDislike(id)}
                        ></button>
                    </div>
                </div> 
            </div>
            <div onClick={(e) => handleUpdateBtn(e)} className='comments__update-btn'></div>
            <div onClick={handleDelete} className='comments__delete-btn'></div>
        </div>
    </form>
  )
}

export default CommentList