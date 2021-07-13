import axios from "axios";
import ACTIONS from "./index";

export const dispatchLogin = () => {
  return {
    type: ACTIONS.LOGIN,
  };
};

export const fetchuUser = async (token) => {
  const res = await axios.get("/user/UserDetails", {
    headers: { Authorisation: token },
  });

  return res;
};

export const dispatchGetUser = (res) => {
  return {
    type: ACTIONS.GET_USER,
    payload: {
      user: res.data,
    },
  };
};
