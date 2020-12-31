import { fetch } from './csrf.js';

const SET_ALL_SPOTS = 'spots/setSpots';

//Action creator that produces object
const setSpots = (spots) => ({
  type: SET_ALL_SPOTS,
  spots: spots,
});

//Action creator that produces a function'
//thunk action
export const fetchAllSpots = () =>{
    return async (dispatch) => {

        const res = await fetch("/api/spots")
        dispatch(
            setSpots(res.data.spots)
        );
    }
}


const initialState =  [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_ALL_SPOTS:
      newState = action.spots
      return newState;
    default:
      return state;
  }
}

export default reducer;
