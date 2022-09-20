import { useRef } from "react";
import "./Register.css";

export default function Register({ setType }) {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = () => {
    fetch("http://10.100.104.45:8000/authentication/users", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    }).then(response => response.json()).then(
        obj => {
          alert(obj.message);
          setType('login');
        }
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
            <input ref={firstNameRef} placeholder="First Name" className="registerInput" />
            <input ref={lastNameRef} placeholder="Last Name" className="registerInput" />
            <input ref={emailRef} placeholder="Email" className="registerInput" />
            <input
              ref={passwordRef}
              placeholder="Password"
              className="registerInput"
              type="password"
            />
            <input
              ref={confirmPasswordRef}
              placeholder="Confirm Password"
              className="registerInput"
              type="password"
            />
            <button className="registerButton" onClick={handleSubmit}>
              Sign up
            </button>
            <button 
              className="registerLoginButton"
              onClick={ () => setType('login') }
            >
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
