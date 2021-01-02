import { fetch } from './csrf.js';

const SET_SPOT = 'spot/setSpot';

//Action creator that produces object
const setSpot = (spot) => ({
  type: SET_SPOT,
  spot: spot,
});

//Action creator that produces a function'
//thunk action
export const fetchSpot = (id) =>{
    return async (dispatch) => {

        const res = await fetch(`/api/spot/${id}`)
        dispatch(
            setSpot(res.data.spot)
        );
    }
}

export const addBooking = ({userId, openingId, spotId}) => async (dispatch) => {
    const data = 'this Is A fetch request';
    //update userId on openings with put
    dispatch(fetchSpot(spotId))
  }

const initialState =  [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_SPOT:
      newState = action.spot
      return newState;
    default:
      return state;
  }
}

export default reducer;
