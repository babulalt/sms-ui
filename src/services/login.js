import axios from 'axios';

export const postRequest =  (requestLoginData, url) => {
    return  axios.post(`${process.env.REACT_APP_API}/${url}`, requestLoginData);
  };

  export const postStuInfo =  (studentInfoData, url) => {
    return  axios.post(`${process.env.REACT_APP_API}/${url}`, studentInfoData);
  };