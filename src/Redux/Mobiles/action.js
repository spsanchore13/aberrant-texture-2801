import axios from "axios";
import * as types from "./actionTypes";


export const getMobiles = (params) => (dispatch) => {
  dispatch({ type: types.GET_MOBILES_REQUEST });
  return axios
    .get("https://olx-project-api.herokuapp.com/mobiles", params)
    .then((r) => {
      dispatch({ type: types.GET_MOBILES_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.GET_MOBILES_FAILURE, payload: e });
    });
};
