import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Loader from './Loader'
import Rating from './Rating'
import '../Sass/contgen.scss';

const ContComic = () => {
  // Extracion de datos que solo se van a a utilizar 
  const comic = useSelector(state => state.comic);
  const loader = useSelector(state => state.loader);
  const { title, alt, img } = comic;

  if (loader){
    return ( 
      <Loader />
     );
  }

  return ( 
    <div className='cont-comic'>
      <div className='title'>
        <h2>{title}</h2>
      </div>
      <Rating />
      <div className='img'>
        <img src={img}/>
      </div>
      <div className='alt'>
        <p>{alt}</p>
      </div>
    </div>
   );
}
 
export default ContComic;