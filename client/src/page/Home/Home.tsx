import React from "react";
import { connect } from "react-redux";
import Layout from "../../Components/Layout/Layout";
import BanerSwap from '../../Components/BanerSwap/BanerSwap'
import { exitModalRegister, exitModalLogOn } from "../../store/slice/modalSlice"
import { registerUser, loginUser } from "../../store/slice/authSlice"
import ModalAuth from "../../Components/Modal/ModalAuth"

function Home({ exitModalRegister, dispatchRegisterUser, exitModalLogOn,dispatchLoginUser }: any) {
    return (
        <div className="home-page">
            <div className="main-page">
                <Layout>
                    <BanerSwap />

                </Layout>
            </div>
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
    );
}
const mapStateToProps = (state: any) => {
    return {
        ...state.modalStore
    }
}
const mapDispatchToProps = (dispatch: Function) => ({
    exitModalRegister: () => dispatch(exitModalRegister()),
    exitModalLogOn: () => dispatch(exitModalLogOn()),
    dispatchRegisterUser: (data: any) => dispatch(registerUser(data)),
    dispatchLoginUser: (data: any) => dispatch(loginUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)