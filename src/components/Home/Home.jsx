/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import "./Home.css"
import {BiBookOpen} from 'react-icons/Bi';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Home = () => {

    const [allCard, setAllCard] = useState([]);
    const [selectedCard, setSelectedCard] = useState([]);
    const [remaining, setRemaining]= useState(20)
    const [totalTime, setTotalTime]= useState(0);


    useEffect(() => {
        fetch("./blog.json")
        .then(res => res.json())
        .then((data) => setAllCard(data));
    },[])


    const handleSelectCard = (card) => {
         const isExist = selectedCard.find(item=>item.id==card.id);

         let count = card.credit_time;

         if (isExist) {
            toast('already booked')
         }
         else{

            selectedCard.forEach((item) => {
                count= count + item.credit_time;
            });

            const totalRemaining=20-count;
            if (count >20) {
                toast ("You have used all the credits")
            }
            else{
                
                setTotalTime(count)
                setRemaining(totalRemaining);
       
            setSelectedCard([...selectedCard, card]);
            }
            
         }
         

        
    };

  

 
    return (
        <div className='container'>
            <div className='home-container'>
                <div className='card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                    {allCard.map(card => (
                            <div key={card.id} className='card  w-50 bg-base-100 shadow-xl'>
                    <img className='photo' src={card.image} alt="" />
                    <h2 className='title'>{card.title}</h2>
                    <p className='talks '><small>{card.paragraph}</small></p>
                    <div className='info'>
                        <p>{card.dollar_sign}</p>
                        <p>price: {card.price}</p>
                        <p><BiBookOpen></BiBookOpen></p>
                        <p>credit: {card.credit_time} hr</p>
                    </div>
                    <button onClick={()=>handleSelectCard(card)} className="card-btn text-white  ">Select</button>

                    </div>
                        )
                        
                        )
                    }

                </div>
                
                <ToastContainer></ToastContainer>
                
                <div className='cart'>
                    <Cart 
                    selectedCard={selectedCard}
                     remaining={remaining} totalTime={totalTime}
                    ></Cart>

                </div>
            </div>
            
        </div>
    );
};

export default Home;