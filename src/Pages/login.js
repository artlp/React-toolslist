import axios from "axios";
import "../Assets/Styles/Login.scss";
import Header from "../Layouts/header";
import btnLoginGoogle from "../Assets/Images/btn_google_login.svg";
import { Link } from "react-router-dom";
import useHeader from "../components/hooks/headerState";
import { useEffect } from "react";

function Login() {
  const { setHeaderState } = useHeader();
  useEffect(() => {
    setHeaderState("basic");
    // first
  }, [setHeaderState]);
  const handleSubmit = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    if (email.length !== 0 && password.length !== 0) {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      };
      const loginData = {
        username: email,
        password: password,
      };
      axios
        .post(
          "https://test.addme.tools/wp/wp-json/jwt-auth/v1/token",
          loginData,
          { headers: headers }
        )
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user_nicename", res.data.user_nicename);
          localStorage.setItem("user_email", res.data.user_email);
          localStorage.setItem("user_display_name", res.data.user_display_name);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="login-signup-wrapper">
        <div className="google_placeholder">
          <img src={btnLoginGoogle} alt="Login button" />
        </div>
        <div className="login-signup-form">
          <form onSubmit={handleSubmit}>
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
                type="password"
                name="password"
                id="password"
                placeholder=" "
                title="Password"
                required
              />
              <span>Password</span>
            </label>
            <div className="form_options">
              <div className="remember_checkbox">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="/recover">Forgot password?</Link>
            </div>
            <button type="submit">Log in</button>
          </form>
        </div>
        <hr />
        <div className="form_options signup_offer">
          <p>Not a member yet?</p>
          <Link to="/signup">Join now</Link>
        </div>
        <div className="bottom_navigation"></div>
      </div>
    </div>
  );
}

export default Login;
