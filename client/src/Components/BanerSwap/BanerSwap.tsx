import React, { useState, useEffect } from "react";
import ButtonBlock from "./ButtonBlock/ButtonBlock"
import "./BanerSwap.scss"

function BanerSwap() {
    const [image, setImage] = useState(["bannernem.png", "bannernem1.png", "bannernem.png", "bannernem1.png"])
    const [count, setCount] = useState(0)
    useEffect((): void => {
        const element = document.querySelector('.baner') as HTMLElement
        if (element !== null) {
            element.style.backgroundImage = `url("/image/${image[count]}")`;
            if (image[count] === "bannernem1.png") element.style.padding = '0px 170px 0px 65%'
            if (image[count] === "bannernem.png") element.style.padding = '0px 65% 0px 170px'
        }
        setTimeout((): void => {
            setCount(count > 2 ? 0 : count + 1)
        }, 10000)
    }, [count])
    return (
        <>
            <div className="main-page-baner">
                <div className="baner">
                    <div className="blockForText">
                        <h1>Assembling computers to order, for any task</h1>
                        <p>Uncompromising solutions assembled by a professional with individual approach and attention to every detail</p>
                    </div>
                </div>
                <div className="button-block">
                    <ButtonBlock text="PC-Table" classes='button-image-one button-image' type="pc-table" />
                    <ButtonBlock text="Gaming" classes='button-image-two button-image' type="pc-gaming" />
                    <ButtonBlock text="Workstation" classes='button-image-three button-image' type="workstation" />
                    <ButtonBlock text="Computer for club" classes='button-image-four button-image' type="ComputerForClub" />
                    <ButtonBlock text="Peripherals" classes='button-image-five button-image' type="peripherals" />
                </div>
            </div>
        </>
    );
}



export default BanerSwap;