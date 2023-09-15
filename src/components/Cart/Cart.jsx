/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Cart.css"

const Cart = ({ selectedCard , remaining,totalTime}) => {
    console.log(selectedCard);
    
    return (
        <div className='add-cart '>
            <div className='card  w-50 bg-base-600 shadow-xl  '>
                <h3 className='text-white font-bold bg-blue-600'>Credit Hour Remaining {remaining} </h3>    
                   <h1 className='border bottom 1px'></h1>
                <h2 className='course-name font-bold'>Course Name</h2>

                <h1 className='border bottom 1px'></h1> 

                <h1> <small>Selected:{selectedCard.length}</small> </h1>

            {
                selectedCard.map(card=> (
                    <li className='flex' key={card.id} >{card.title}</li>
                ))
            }

            <h1 className='border bottom 1px'></h1> 

            <h1 className='flex text-bold'>Total Credit Hour : {totalTime}</h1>
            </div>  
            

            
        </div>
    );
};

export default Cart;