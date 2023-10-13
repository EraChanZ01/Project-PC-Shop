import React, { useLayoutEffect } from "react";
import ModalAuth from "../../Components/Modal/ModalAuth";
import { exitModalRegister, exitModalLogOn } from "../../store/slice/modalSlice"
import { registerUser, loginUser } from "../../store/slice/userSlice"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Home/Home'
import Basket from '../Basket/Basket'
import { connect } from "react-redux";
import './App.scss'
import { checkAuth } from '../../store/slice/userSlice'

function App({ checkAuth, exitModalRegister, dispatchRegisterUser, exitModalLogOn, dispatchLoginUser }: any) {
  
  useLayoutEffect(() => {
    checkAuth()
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
        <ModalAuth input={[
          { name: 'firstName', text: "First Name" },
          { name: 'lastName', text: "Last Name" },
          { name: 'phoneNumber', text: "Phone Number" },
          { name: 'password', text: "Password" }
        ]}
          button={dispatchRegisterUser}
          exitModal={exitModalRegister}
          title={"Register"}
          buttonText="Sign up" />
        <ModalAuth input={[
          { name: 'phoneNumber', text: "Phone Number" },
          { name: 'password', text: "Password" }
        ]}
          button={dispatchLoginUser}
          exitModal={exitModalLogOn}
          id={"LogOn"}
          title={"Sign in"}
          buttonText="Sign in" />
      </div>
    </BrowserRouter>
  );
}
const mapDispatchToProps = (dispatch: any) => (
  {
    checkAuth: () => dispatch(checkAuth()),
    exitModalRegister: () => dispatch(exitModalRegister()),
    exitModalLogOn: () => dispatch(exitModalLogOn()),
    dispatchRegisterUser: (data: any) => dispatch(registerUser(data)),
    dispatchLoginUser: (data: any) => dispatch(loginUser(data))
  }
)

export default connect(null, mapDispatchToProps)(App);
