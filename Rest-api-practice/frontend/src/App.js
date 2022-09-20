import { useState } from "react";

import  Home  from "./pages/Home/Home";
import Auth from "./pages/auth/auth";

function App() {
  const [fullName, setFullName] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if(isAuthenticated)
    return <Home fullName = { fullName }/>
  else
    return <Auth setIsAuthenticated = { setIsAuthenticated } setFullName = { setFullName }/>
}

export default App;
