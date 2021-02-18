import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getComicInit } from './Store/Actions/actions';
import './Sass/app.scss';

//Componentes
import Loader from './Components/Loader'
import InfoSocial from './Components/InfoSocial';
import ContComic from './Components/ContComic';
import NavSelect from './Components/NavSelect';
import { cleanup } from '@testing-library/react';

function App() {
  //Loader
  const [loader, setLoader] = useState(false);
  const comic = useSelector(state => state.comic);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoader(true)
    setTimeout(()=>{
      dispatch( getComicInit() )
      setLoader(false);
    }, 2500)

    return function cleanup(){
      remove();
    }
  }, [])

  const remove = ()=>{
    localStorage.removeItem('comicRating');
  }

  if (loader){
    return (
      <Loader />
    );
  }else if (comic){
    return (
      <div className='base-dark cont-gen'>
        <InfoSocial />
        <ContComic />
        <NavSelect number={comic.num} />
      </div>
    );
  }
  return (
    <Loader />
  );
}

export default App;
