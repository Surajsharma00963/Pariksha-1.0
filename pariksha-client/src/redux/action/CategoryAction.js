import axios from "axios";
import ACTIONS from "./index";

  
  export const fetchCategory = async (token) => {
    const res = await axios.get("/user/category/GetCategory", {
      headers: { Authorisation: token },
    });
  
    return res;
  };
  
  export const dispatchCategory = (res) => {
    return {
      type: ACTIONS.GET_CATEGORY,
      payload:  res.data,
    
    };
  };
  