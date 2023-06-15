import React from "react";
import './Header.scss'

function Header() {
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
            </div>
        </div>
    );
}

export default Header;