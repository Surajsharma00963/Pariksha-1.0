import React, { useState } from "react";
import NavbarNav from "../Navbar/NavbarNav";
import Footer from "../Footer/Footer";
import { showErrMsg, showSuccessMsg } from "../utils/Notification/Notification";
import { isEmail } from "../utils/Validation/Validation";
import axios from "axios";

const initialState = {
  password: "",
  ConfirmPassword: "",
  err: "",
  success: "",
};

function ForgotPassword() {
  const [mail, setmail] = useState(initialState);
  const { email, err, success } = mail;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setmail({ ...mail, [name]: value, err: "", success: "" });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!isEmail(email))
        return setmail({...mail, err: 'Invalid emails.', success: ''})
        
    try {
        const res = await axios.post('/user/forgotPassword', {email})

        return setmail({...mail, err: '', success: res.data.msg})
    } catch (err) {
        err.response.data.msg && mail({...mail, err:  err.response.data.msg, success: ''})
    }
}
  return (
    <div>
      <NavbarNav />
      <div className="m-0 p-0 mt-5 pt-5 bg-img1 ">
        <div className="container text-center text-light ">
          <h1 className="text-center pt-5">Forgot Password</h1>
          <p>
            Enter your Email ID of your Account and reset password Link will be
            sent to your Email
          </p>
        </div>
        <div className="row py-5 m-0 p-0">
          <div className="col-xl-3 col-12  text-light mx-auto border rounded-3 opac">
            <h1 className="text-center my-4">Send Password</h1>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            <form className="mx-4 my-4 " onSubmit={handleSubmit}>
              <div className="my-4">
                <label htmlFor="email" className="form-label ">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter your "
                  required
                  className="form-control"
                  value={email}
                  name="email"
                  onChange={handleChangeInput}
                />
              </div>

              <button type="submit" className="btn border  text-light mt-4">
                Send Password
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ForgotPassword;
