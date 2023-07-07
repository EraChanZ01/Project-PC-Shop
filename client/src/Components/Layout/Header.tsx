import React, { useLayoutEffect, useState } from "react";
import './Header.scss'
import { changeBasket, userLogOut } from "../../store/slice/userSlice"
import { openModalRegister, openModalLogOn } from '../../store/slice/modalSlice'
import { connect } from "react-redux";

function Header({ openModalRegister, modalRegister, modalLogOn, openModalLogOn, data, basket, favorite, changeBasket, userLogOut }: any) {

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
    const HandelClickLogOut = () => {
        localStorage.removeItem('token')
        userLogOut()
    }

    useLayoutEffect(() => {
        const basketValue = localStorage.getItem('basket')
        if (basketValue !== null) changeBasket(JSON.parse(basketValue))
    }, [])

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
                        <p>{favorite.length}</p>
                    </div>
                    <p>Favorite</p>
                </div>
                <div className="user-basket">
                    <div className="icon-part">
                        <img src="/image/basket.png" />
                        <p>{basket.length}</p>
                    </div>
                    <p>Basket</p>
                </div>
                <div className="user-auth">
                    {data ? (
                        <>
                            <button className="Log-out" onClick={HandelClickLogOut}>Log out</button>
                        </>
                    ) : (
                        <>
                            <button className="Sign-in" onClick={HandelClickLogOn}>Sign in</button>
                            <button className="Sign-up" onClick={HandelClickRegister}>Sign up</button>
                        </>
                    )}

                </div>
            </div>

        </div>
    );
}

const mapStateToProps = (state: any) => {
    return { ...state.modalStore, ...state.userStore }

}
const mapDispatchToProps = (dispatch: any) => ({
    openModalRegister: () => dispatch(openModalRegister()),
    openModalLogOn: () => dispatch(openModalLogOn()),
    changeBasket: (data: any) => dispatch(changeBasket(data)),
    userLogOut: () => dispatch(userLogOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);