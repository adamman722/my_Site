import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Button() {
  function ToLogin(event) {}
  return (
    <div>
      <nav>
        <NavLink to={"/Login"} className="nugget buttonLoginPage">
          Have a account
        </NavLink>

        <p className="loginPage_PTags">OR</p>

        <NavLink to={"/Register"} className="nugget buttonLoginPage">
          Register
        </NavLink>
      </nav>
    </div>
    // <div>
    //   <button className="ButtonBox" type="submit">
    //     Login
    //   </button>
    //   <button className="ButtonBox" type="submit">
    //     Register
    //   </button>
    // </div>
  );
}
export default Button;
