import React from "react";
import './Header.scss'
import { openModalRegister, openModalLogOn } from '../../store/slice/modalSlice'
import { connect } from "react-redux";

function Header({ openModalRegister, modalRegister, modalLogOn, openModalLogOn }: any) {

    const HandelClickRegister = () => {
        if (!modalRegister) {
            openModalRegister()
        }
    }
    const HandelClickLogOn = () => {
        if (!modalLogOn) {
            openModalLogOn()
        }
    }

    return (
        <div className="Header-page">
            <div className="tool-part">
                <div><img src="/image/logo.jpg" /></div>
                <div className="button-tool">
                    <p>Catalog</p>
                    <p>Services</p>
                    <p>Buyers</p>
                    <p>Contact us</p>
                </div>
            </div>
            <div className="user-part">
                <div className="user-favorite">
                    <div className="icon-part">
                        <img src="/image/heart.png" />
                        <p>3</p>
                    </div>
                    <p>Favorite</p>
                </div>
                <div className="user-basket">
                    <div className="icon-part">
                        <img src="/image/basket.png" />
                        <p>1</p>
                    </div>
                    <p>Basket</p>
                </div>
                <div className="user-auth">
                    <button className="Log-out">Log out</button>
                    <button className="Sign-in" onClick={HandelClickLogOn}>Sign in</button>
                    <button className="Sign-up" onClick={HandelClickRegister}>Sign up</button>
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = (state: any) => {
    return { ...state.modalStore }

}
const mapDispatchToProps = (dispatch: any) => ({
    openModalRegister: () => dispatch(openModalRegister()),
    openModalLogOn: () => dispatch(openModalLogOn())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);