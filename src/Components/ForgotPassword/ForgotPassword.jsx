import { useState } from "react";
import "./ForgotPassword.scss";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleMail = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  return (
    <div className="forgotpassword">
      <div className="forgotpassword_wrapper">
        <div className="forgotpassword_wrapper_box">
          <div className="forgotpassword_wrapper_box_text">
            Please enter your email below
          </div>
          <div className="forgotpassword_wrapper_box_email">
            <input placeholder="email" type="email" onChange={handleMail} />
          </div>
          <div className="forgotpassword_wrapper_box_buttons">
            <div className="forgotpassword_wrapper_box_buttons_cancel">
              <button className="button ">
                <Link to="/" element={<Home />} /> Cancel
              </button>
            </div>
            <div className="forgotpassword_wrapper_box_buttons_code">
              <button className="button button2">Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
