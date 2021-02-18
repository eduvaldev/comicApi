import axios from 'axios';
import { ADD_INITAL_COMIC, TRUE_LOADER, FETCH_COMIC } from '../Constants/constants';
let config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
}

export function getComicInit(){
  return( dispatch =>{
    console.log('aqui estoy')
    axios.get('https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json')
          .then( res =>{
            dispatch({
              type: ADD_INITAL_COMIC,
              payload: res.data
            })
          })
          .catch( err => console.log(err))
  })
}

export function fetchComic(number){
  return( dispatch => {
    axios.get(`https://cors-anywhere.herokuapp.com/http://xkcd.com/${number}/info.0.json`)
          .then( res =>{
            dispatch({
              type: FETCH_COMIC,
              payload: res.data
            })
          })
  })
}

export function changeLoader(type){
  return( dispatch => {
    dispatch({
      type: TRUE_LOADER,
      payload: type
    })
  })
}

/* export function closeCity(id){
  return( dispatch =>{
    dispatch({
      type: CLOSE_CITY,
      payload: id
    })
  })
} */