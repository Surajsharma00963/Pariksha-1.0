import axios from "axios";
import ACTIONS from "./index";

  
  export const fetchExam = async (token) => {
    const res = await axios.get("/user/exam/GetExam", {
      headers: { Authorisation: token },
    });
  
    return res;
  };
  
  export const dispatchGetExam = (res) => {
    return {
      type: ACTIONS.GET_EXAMS,
      payload:  res.data,
    
    };
  };
  