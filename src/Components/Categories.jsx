import React, { useState, useEffect } from 'react';
import HorizontalScroll from 'react-scroll-horizontal';

const Categories = (props) =>{

    const [count, setCount] = useState(0);

    useEffect( ()=> {
       
    }, [count]);

    const increment = (e) =>{
        setCount(count+1);
    }
    const decrement = (e) =>{
        (count === 0) ? setCount(count) : setCount(count-1);
    }

    

    return (
        <div>
            <div className='category-div'>
                <HorizontalScroll>
                        {
                            (props.categories.length === 0) ? [] : props.categories.map( (category, idx) => {
                                return (<span key={idx} className='category'>{category.menu_category}</span>)
                            }) 
                        }
                </HorizontalScroll>
            </div>
            <div className='container'>
                    {
                        (props.categories.length === 0) ? [] : props.categories[0].category_dishes.map( (dish, idx) => {
                            return ( 
                                <div className='card-container' key={idx}>
                                    <div className='card'> 
                                        <div className='card-content'>
                                            <div className='text-content'>
                                                <div className='dish_name'>
                                                    {dish.dish_name}
                                                </div>
                                                    <div className='price'>
                                                        {`${dish.dish_currency}  ${dish.dish_price}`}
                                                    </div>
                                            </div>
                                            <img src={dish.dish_image} alt={dish.dish_name}/>
                                        </div>
                                            <div className='calories'>
                                                    {`${dish.dish_calories} calories`}
                                            </div>
                                            <div className='description'>
                                                {dish.dish_description}
                                            </div>
                                            <div className='btn'>
                                                <span className='decrement-button' onClick={e => decrement(e)}>-</span>
                                                <span className='items'>{count}</span>
                                                <span className='increment-button' onClick={e => increment(e)}>+</span>
                                            </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
        </div>
    );
}

export default Categories;