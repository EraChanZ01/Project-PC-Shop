import React, { useState, useEffect } from "react";
import "./BanerSwap.scss"

function BanerSwap() {
    const [image, setImage] = useState(["bannernem.png", "bannernem1.png", "bannernem.png", "bannernem1.png"])
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("work")
        const element = document.querySelector('.baner') as HTMLElement
        if (element !== null) {
            element.style.backgroundImage = `url("/image/${image[count]}")`;
            if (image[count] === "bannernem1.png") element.style.padding = '0px 170px 0px 65%'
            if (image[count] === "bannernem.png") element.style.padding = '0px 65% 0px 170px'
        }
        setTimeout(() => {
            return setCount(count > 2 ? 0 : count + 1)
        }, 10000)
    }, [count])
    return (
        <div className="main-page-baner">
            <div className="baner">
                <div className="blockForText">
                    <h1>Assembling computers to order, for any task</h1>
                    <p>Uncompromising solutions assembled by a professional with individual approach and attention to every detail</p>
                </div>
            </div>
            <div className="button-block">
                <div className="button-frame">
                    <div className="button-fon">
                        <button className='button-image-one button-image'></button>
                    </div>
                    <p>PC-Table</p>
                </div>
                <div className="button-frame">
                    <div className="button-fon">
                        <button className='button-image-two button-image'></button>
                    </div>
                    <p>Gaming</p>
                </div>
                <div className="button-frame">
                    <div className="button-fon">
                        <button className='button-image-three button-image'></button>
                    </div>
                    <p>Workstation</p>
                </div>
                <div className="button-frame">
                    <div className="button-fon">
                        <button className='button-image-four button-image'></button>
                    </div>
                    <p>Computer for club</p>
                </div>
                <div className="button-frame">
                    <div className="button-fon">
                        <button className='button-image-five button-image'></button>
                    </div>
                    <p>Peripherals</p>
                </div>
            </div>
        </div>
    );
}

export default BanerSwap;