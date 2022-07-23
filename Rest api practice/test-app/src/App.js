import { useState } from "react";

import  Home  from "./pages/Home/Home";
import Auth from "./pages/auth/auth";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if(isAuthenticated)
    return <Home />
  else
    return <Auth setIsAuthenticated = { setIsAuthenticated } />
}

export default App;
