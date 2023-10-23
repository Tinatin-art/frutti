import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddComment from './AddComment';
import CommentList from './CommentList';
import { getComments } from '../../pages/store/CommentSlice';

const Comments = () => {

    const dispatch = useDispatch();
    const { comments, deleteComment, isLikes, addComment } = useSelector((state) => {
        return state.commentSlice
    });

    console.log(comments)


    useEffect(() => {

        dispatch(getComments())
    }, [dispatch, deleteComment, isLikes, addComment]);


    const [limit, setLimit] = useState(3);

    const handleLoadMore = () => {
        setLimit(limit + 2)
    }


    let commentsQuantity = comments.length - limit



    return (
        <div className='comments'>
            <div className="comments__total-count">
                <div>Всего <span>{comments.length}</span>  </div>
                <div className="sort-in-row">Сортировать по:
                    <ul>
                        <li className=" date active-desc"><span>дате</span></li>
                        <li className=" rating"><span>рейтингу</span></li>
                        <li className=" useful"><span>полезности</span></li>
                    </ul>
                </div>
            </div>
            <div>
                {comments.slice(0, limit).map(item => (
                    <CommentList key={item.id} item={item} />
                ))}
            </div>
            <div className="comments__show">
                <button onClick={handleLoadMore} className="comments__show-more">Показать еще</button>
                <div className="comments__show-count">осталось {commentsQuantity > 0 ? commentsQuantity : 0} комментариев</div>
            </div>
            <AddComment />
        </div>
    )
}

export default Comments