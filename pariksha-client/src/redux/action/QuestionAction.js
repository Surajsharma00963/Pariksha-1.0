import axios from "axios";
import ACTIONS from "./index";

  
  export const fetchQuestion = async (token,id) => {
    
    const res = await axios.get(`/user/exam/ViewQuestions/${id}`, {
      headers: { Authorisation: token },
    });
  
    return res;
  };
  
  export const dispatchQuestion = (res) => {
    return {
      type: ACTIONS.GET_QUESTIONS,
      payload:res.data
    
    };
  };
  