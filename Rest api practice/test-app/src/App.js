import { useEffect, useState } from "react";

import  Login  from "./pages/Login/Login";
import  Home  from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Auth from "./pages/auth/auth";

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   fetch('http://localhost:4000/api/auth', {
  //     method: "POST",
  //     credentials: "include",
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       setIsLoading(false);
  //       setIsAuthenticated(response.isAuthenticated);
  //     });
  // }, []);

  if(isAuthenticated)
    return <Home />
  else
    return <Auth setIsAuthenticated = { setIsAuthenticated } />
  // return <Register />;
}

export default App;
