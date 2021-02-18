import { ADD_INITAL_COMIC, FETCH_COMIC, TRUE_LOADER } from '../Constants/constants'

const initalState = {
  comic: null,
  loader: false,
}

const Reducer = (state = initalState, action)=>{
  switch( action.type ){

    case ADD_INITAL_COMIC:
      return {...state, comic: action.payload }

    case FETCH_COMIC:
      return {loader: true, comic: action.payload }

    case TRUE_LOADER:
      return {...state, loader: action.payload }

    default:
      return state
  }
};

export default Reducer;
