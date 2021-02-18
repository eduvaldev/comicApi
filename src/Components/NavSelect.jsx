import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchComic, changeLoader } from '../Store/Actions/actions';
import '../Sass/options.scss';

const NavSelect = () => {
  const comic = useSelector(state => state.comic);
  const dispatch = useDispatch();

  const handleChange = (number) => {
    dispatch( fetchComic(number) );
    dispatch( changeLoader(true) );
    setTimeout(()=>{
      dispatch( changeLoader(false) );
    }, 1500)
  }

  const handleRandomChange = () => {
    let num = Math.floor(Math.random() * (2426 - 1) + 1);
    dispatch( fetchComic(num) );
    dispatch( changeLoader(true) );
    setTimeout(()=>{
      dispatch( changeLoader(false) );
    }, 1500)
  }

  return ( 
    <div className='nav-right' >
      <div className="selct-op" onClick={()=> handleChange(1)}> 
        <i className="fas fa-angle-double-left"></i>
        <p>First</p>
      </div>
      <div className="selct-op" onClick={()=> handleChange( comic.num - 1)}>
        <i className="fas fa-angle-left"></i>
        <p>Prev</p>
      </div>
      <div className="selct-op" onClick={handleRandomChange }>
        <i className="fas fa-random"></i>
        <p>Random</p>
      </div>
      <div className="selct-op" onClick={()=> handleChange( comic.num + 1)}>
        <i className="fas fa-angle-right"></i>
        <p>Next</p>
      </div>
      <div className="selct-op" onClick={()=> handleChange( 2425 )}>
        <i className="fas fa-angle-double-right"></i>
        <p>Last</p>
      </div>
    </div>
   );
}
 
export default NavSelect;