import * as types from "../constant/actionTypes";
import { postRequest } from "../services/login";


const getAuth = (token) => ({
  type: types.IS_AUTH,
  payload: token,
});

export const logout = () => ({
  type: types.LOG_OUT,
});

export const auth = (dataLoginRequest) => async (dispatch) => {
  try {
    const response = await postRequest(dataLoginRequest, "user/login");
    console.log('......',response.data.token)
    dispatch(getAuth(response.data.token));
  } catch (error) {
    console.log("error in login",error);
  }
};

