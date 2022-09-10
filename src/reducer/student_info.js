import * as types from "../constant/actionTypes";

const INITIAL_STUDENT_INFO_STATE = {
  isSignup: false,
};

function StudentInfo(state = INITIAL_STUDENT_INFO_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.STUDENT_INFO:
      console.log("data",payload)
      return {
        ...state,
         isSignup: payload,
      };
    default:
      return state;
  }
}

export default StudentInfo;