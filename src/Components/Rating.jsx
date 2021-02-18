import { cleanup } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import '../Sass/rating.scss'

const Rating = () => {
  const comic = useSelector(state => state.comic);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [local, setLocal] = useState({});

  useEffect(() => {
    const initLocal = localStorage.getItem('comicRating');
    if(!initLocal){
      //set local Storage
      localStorage.setItem('comicRating', JSON.stringify(local));
    }else{
      setLocal(JSON.parse(initLocal));
    } 
  }, [])

  const dateRating = (rating)=>{
    let objRating = { 
      ...local,
      [comic.num]: rating
    }
    setRating(rating);
    //set Local Storage
    localStorage.setItem('comicRating', JSON.stringify(objRating));
  }

  return ( 
    <div className='rating-cont'>
      <h3> Rate this comic!</h3>
      {[...Array(5)].map( (star, index) =>{
        const valRating = index + 1;

        return (
          <label key={valRating}>
              <input 
                type="radio" 
                name="rating" 
                value={valRating}
                onChange={ () => dateRating(valRating)}
              />
              { valRating <= (hover || rating) ?
              <i  
                style={{color: '#fff'}}              
                className="fas fa-star start"
                onMouseEnter={ ()=> setHover(valRating)}
                onMouseLeave={ ()=> setHover(null)}
              ></i> 
              : <i    
                style={{color: '#888385'}}            
                className="fas fa-star start"
                onMouseEnter={ ()=> setHover(valRating)}
                onMouseLeave={ ()=> setHover(null)}
              ></i> }
              
          </label>
        )
      })}
    </div>
   );
}
 
export default Rating;
//color={ valRating <= rating ? "#fff" :"#888385"}
//style={{color:  '#888385'}} 