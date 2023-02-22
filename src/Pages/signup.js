import Header from "../Layouts/header";
import btnSignupGoogle from "../Assets/Images/btn_google_signup.svg";
import "../Assets/Styles/Signup.scss";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <Header />
      <div className="login-signup-wrapper">
        <div className="google_placeholder">
          <img src={btnSignupGoogle} alt="Signup button" />
        </div>
        <div className="login-signup-form">
          <form action="post">
            <label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder=" "
                title="Full name"
                required
              />
              <span>Full name</span>
            </label>
            <label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" "
                title="Email"
                required
              />
              <span>Email</span>
            </label>
            <label>
              <input
                className="signup_password"
                type="password"
                name="password"
                id="password"
                placeholder=" "
                title="Password"
                required
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              />
              <span className="signup_password">Password</span>
            </label>
            <label>
              <input
                className="signup_password "
                type="password"
                name="repeatpassword"
                id="repeatpassword"
                placeholder=" "
                title="Repeat password"
                required
              />
              <span className="signup_password">Repeat password</span>
            </label>
            <button type="submit">Sign up</button>
          </form>
        </div>
        <hr />
        <div className="form_options login_offer">
          <p>Already a member?</p>

          <Link to="/login">Log in</Link>
        </div>
        <div className="bottom_navigation"></div>
      </div>
    </div>
  );
}

export default Signup;
