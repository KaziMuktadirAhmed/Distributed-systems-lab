import "./Login.css";

import { useRef } from "react";

export default function Login( { setIsAuthenticated, setType, setFullName } ) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = () => {
    fetch("http://10.100.104.45:8000/authentication/auth", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    }).then(response => response.json()).then(
        obj => {
          console.log(obj);
          alert(obj.message)
          setIsAuthenticated(obj.isAuthenticated);
          setFullName(obj.fullName);
        }
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Freakbook</h3>
          <span className="loginDesc">
            Connect with someone and do the thing
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input 
              ref={ emailRef } 
              placeholder="Email" 
              className="loginInput" 
            />
            <input
              ref={ passwordRef }
              placeholder="Password"
              className="loginInput"
              type="password"
            />
            <button 
              className="loginButton" 
              onClick={ handleSubmit }
            >
              Log in
            </button>
            <span className="loginForgot">Forgot password ?</span>
            <button 
              className="loginRegisterButton"
              onClick={ () => setType('register') }
            >
              Create a new Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
