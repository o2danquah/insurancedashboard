import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContextAPI from "../Context/ContextAPI";

const User_Regex = /^[0-9A-Za-z]{4,16}$/;
const Passwd_Regex = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;

function Login() {
  const { setGlobalUserName } = useContext(ContextAPI);
  const navigate = useNavigate();

  const userRef = useRef(null);
  const errorRef = useRef(null);

  const [Username, setUsername] = useState("");
  const [verifyUsername, setVerifyUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [Pwd, setPwd] = useState("");
  const [verifyPwd, setVerifyPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setVerifyUsername(User_Regex.test(Username));
  }, [Username]);

  useEffect(() => {
    setVerifyPwd(Passwd_Regex.test(Pwd));
  }, [Pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [Username, Pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidUsername = User_Regex.test(Username);
    const isValidPwd = Passwd_Regex.test(Pwd);


// if not verified error focus is active 
    if (!isValidUsername || !isValidPwd) {
      setErrMsg("Invalid username or password.");
      errorRef.current.focus();
      return;
    }

    const User = {
      username: "testuser2511",
      password: "password@1234",
    };

    if (Username === User.username && Pwd === User.password) {
    // setting username as a global variable using context
    setGlobalUserName(Username);
      navigate("/Dashboard");
    } else {
      setErrMsg("Incorrect username or password.");
      errorRef.current.focus();
    }
  };


  return (
    <main className="container h-100" role="main">

      <div className="d-flex align-items-center justify-content-center h-100">
        <section
          aria-labelledby="login-form-title"
          className="w-100 px-2 py-5 shadow-sm"
          
        >
          <div className="wrap-login100">
            <p
              ref={errorRef}
              id="error-message"
              className={errMsg ? "error" : "offscreen"}
              aria-live="assertive"
              tabIndex={-1}
            >
              {errMsg}
            </p>

            <form
              className="bg-grey mx-5"
              aria-labelledby="login-form-title"
              onSubmit={handleSubmit}
            >
                <h1 className="text-center">DASHBOARD LOGIN</h1>
              <h4 id="login-form-title" className="login100-form-title">
                Please log in to access your dashboard
              </h4>

              <div className="form-group py-2">
                <label htmlFor="username" className="pb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  ref={userRef}
                  className="form-control py-2"
                  aria-invalid={!verifyUsername}
                  aria-describedby="username-desc"
                  placeholder="Enter your username"
                  onChange={(e) => setUsername(e.target.value)}
                  onBlur={() => setUsernameFocus(false)}
                  onFocus={() => setUsernameFocus(true)}
                />
                <small
                  id="username-desc"
                  className="form-text text-muted"
                  aria-live="polite"
                >
                  Username must be 4-16 alphanumeric characters.
                </small>
              </div>

              <div className="form-group py-2">
                <label htmlFor="password" className="pb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control py-2"
                  aria-invalid={!verifyPwd}
                  aria-describedby="password-desc"
                  placeholder="Enter your password"
                  onChange={(e) => setPwd(e.target.value)}
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <small
                  id="password-desc"
                  className="form-text text-muted"
                  aria-live="polite"
                >
                  Password must include 8-32 characters, with letters and numbers.
                </small>
              </div>

              <div className="py-3">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  aria-label="Submit login form"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;