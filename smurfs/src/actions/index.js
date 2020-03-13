import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURFS_FETCH_SUCCESS = "SMURFS_FETCH_SUCCESS";
export const SMURFS_FETCH_ERROR = "SMURFS_FETCH_ERROR";
// Those three types above are all a representation of our State Machine
// fetching, resolve, reject... etc. : ) Start to notice this pattern. You'll use it constantly in redux!

export const fetchSmurfs = () => {
  const promise = axios.get(`http://localhost:3333/smurfs/`);
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS }); // first state of 'fetching' is dispatched
    promise
      .then(response => {
        dispatch({ type: SMURFS_FETCH_SUCCESS, payload: response.data }); // 2nd state of success is dispatched IF the promise resolves
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: SMURFS_FETCH_ERROR }); // our other 2nd state of 'rejected' will be dispatched here.
      });
  };
};
