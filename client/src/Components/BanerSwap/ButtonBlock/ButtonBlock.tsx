import React from "react";

interface IButtonBlock {
    text: string
    classes: string
}

function ButtonBlock({ text, classes }: IButtonBlock) {

    return (

        <div className="button-frame">
            <div className="button-fon">
                <button className={`${classes}`}></button>
            </div>
            <p>{text}</p>
        </div>
    )
}


export default ButtonBlock