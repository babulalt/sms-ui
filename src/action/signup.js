import * as types from "../constant/actionTypes";
import { postRequest } from "../services/login";


const signUpUser = (response) => ({
  type: types.ISIGNUP,
  payload: response,
});


export const signUp= (dataSignUpRequest) => async (dispatch) => {
  try {
    const response = await postRequest(dataSignUpRequest, "user");
    console.log('......',response.data)
    dispatch(signUpUser(true));
  } catch (error) {
    console.log("error in sign up",error);
  }
};