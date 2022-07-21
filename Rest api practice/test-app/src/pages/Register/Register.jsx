import { useRef } from "react";
import "./Register.css";

export default function Register() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = () => {
    fetch("http://localhost:4000/api/auth", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
      
      ),
    }).then(response => response.json()).then(
        obj => console.log(obj)
    );
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Freakbook</h3>
          <span className="registerDesc">
            Connect with someone and do the thing
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input ref={emailRef} placeholder="First Name" className="registerInput" />
            <input ref={emailRef} placeholder="Last Name" className="registerInput" />
            <input ref={emailRef} placeholder="Email" className="registerInput" />
            <input
              ref={passwordRef}
              placeholder="Password"
              className="registerInput"
              type="password"
            />
            <input
              ref={passwordRef}
              placeholder="Confirm Password"
              className="registerInput"
              type="password"
            />
            <button className="registerButton" onClick={handleSubmit}>
              Sign up
            </button>
            <button className="registerLoginButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
