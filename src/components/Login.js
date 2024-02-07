import { useState } from "react"
import LoginPopUp from "./LoginPopUp";

const Login = () =>
{
  const [isOpen, setIsOpen] = useState(false);
  function togglePop () {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="logIn" onClick={togglePop}>Login</button>
      {isOpen ? <LoginPopUp toggle={togglePop} /> : null}
    </div>
  )
}

export default Login