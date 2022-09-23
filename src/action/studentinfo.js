import ToastConfig from "../components/toast/Toast";
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
    ToastConfig.success("Successfully added student information.")
  }
  catch (error) {
      console.log("error in sign up",error);
      ToastConfig.error(error.error)
    }
};