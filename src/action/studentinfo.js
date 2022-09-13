import * as types from "../constant/actionTypes";
import { postRequest, postStuInfo } from "../services/login";


const stuInfo = (response) => ({
  type: types.STUDENT_INFO,
  payload: response,
});


export const studentInfoAction= (studentInfoData) => async (dispatch) => {
  try{
    const response = await postStuInfo(studentInfoData, "student_info");
    dispatch(stuInfo(response));
  }
  catch (error) {
      console.log("error in sign up",error);
    }
};