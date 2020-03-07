import { FETCHING_SMURFS, SMURFS_FETCH_SUCCESS, SMURFS_FETCH_ERROR } from "../actions";

const initialState = {
   smurfs: [],
   smurf: {
      id:"",
      type:"",
      setup:"",
      punchline: ""

   },
    fetchingSmurfs: false, error: "" 
  };

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true }); // if we're fetching simply trigger the boolean!
    case SMURFS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        smurfs: [...state.smurfs, ...action.payload], // if our promise was successfull, build out the smurfs array.
        fetchingSmurfs: false // also, set our boolean to false, because we're no longer fetching
      });
    case SMURFS_FETCH_ERROR:
      return Object.assign({}, state, {
        fetchingSmurfs: false, // we're also no longer fetching here so set the boolean to false
        error: "Error fetching Smurfs" // now we're getting an error back, set the error as we'd see fit
      });
    default:
      return state;
  }
};


