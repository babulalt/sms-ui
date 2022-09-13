import * as types from "../constant/actionTypes";

const INITIAL_STUDENT_INFO_STATE = {
  studentInfo: null,
};

function StudentInfo(state = INITIAL_STUDENT_INFO_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case types.STUDENT_INFO:
      console.log("data",payload)
      return {
        ...state,
        studentInfo: payload,
      };
    default:
      return state;
  }
}

export default StudentInfo;