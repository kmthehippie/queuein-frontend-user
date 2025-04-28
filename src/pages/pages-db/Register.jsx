import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <div className="left-panel">
        <div className="register-panel">
          <div className="register-header">
            <h3>Great Choice!</h3>
            <small>
              Take this step to make your business flow a little simpler!
            </small>
            <p>Enter your details to create an account!</p>
          </div>
          <div className="register-form">
            <br />
            <form>
              <div className="name">
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  placeholder="Company Name"
                />
              </div>
              <div className="email-address">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="yourcompanyemail@email.com"
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*******"
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="confirmPassword"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="*******"
                />
              </div>

              <button type="submit">register</button>
            </form>
            <button> Register with Google</button>
            <button>Register with Facebook</button>
          </div>
          <div className="register-footer">
            <p>
              Already have an account? <Link to="/db/login">Sign In</Link>
            </p>
            <small>
              Lost your account? <Link to="/db/forgotPw">Recover here</Link>
            </small>
          </div>
        </div>
      </div>
      <div className="right-panel">
        LOGO
        {/* Insert logo here in a large and adjustable size */}
      </div>
    </div>
  );
}

export default Register;
