import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { isLength, isMatch } from "../utils/Validation/Validation";
import { showErrMsg, showSuccessMsg } from "../utils/Notification/Notification";
import logo from "../../logo.png";

const initialState = {
  password: "",
  confirmPassword: "",
  err: "",
  success: "",
};

function ResetPassword() {
  const [data, setData] = useState(initialState);
  const { token } = useParams();

  const { password, confirmPassword, err, success } = data;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async () => {
    if (isLength(password))
      return setData({
        ...data,
        err: "Password must be at least 6 characters.",
        success: "",
      });

    if (!isMatch(password, confirmPassword))
      return setData({ ...data, err: "Password did not match.", success: "" });

    try {
      const res = await axios.post(
        "/user/resetPassword",
        { password },
        {
          headers: { Authorization: token },
        }
      );

      return setData({ ...data, err: "", success: res.data.msg });
    } catch (err) {
      err.response.data.msg &&
        setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <div>
      <div className="container-fluid bg-img1 m-0 p-0 ">
        <div className="opac m-0 p-0">
          <div className="container-fluid opac py-1 m-0 p-0">
            <div className="text-center">
              <img src={logo} alt="..." />
            </div>
            <div class="row my-5 py-5 m-0 p-0">
              <div className="col-xl-3 col-12 my-5 py-3 mx-auto border rounded-3 m-0 p-0  opac text-light">
                <h1 className="text-center mt-3">Reset Password</h1>
                <div>
                  {err && showErrMsg(err)}
                  {success && showSuccessMsg(success)}
                </div>
                <form className="mx-4 my-4 " onSubmit={handleSubmit}>
                  <div className="my-4">
                    <label htmlFor="email" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your Password"
                      required
                      className="form-control"
                      value={password}
                      name="password"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="password" className="form-label">
                      Comfirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your Confirm Password"
                      className="form-control"
                      value={confirmPassword}
                      name="confirmPassword"
                      onChange={handleChangeInput}
                    />
                  </div>

                  <button type="submit" className="btn border  text-light mt-5">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
