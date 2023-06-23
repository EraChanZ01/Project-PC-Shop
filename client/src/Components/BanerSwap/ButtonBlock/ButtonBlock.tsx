import React from "react";
import { connect } from "react-redux";
import { getProducts } from "../../../store/slice/productSlice"

interface IButtonBlock {
    text: string
    classes: string
    dispatchGetProducts: Function
    type: string
}

function ButtonBlock({ text, classes, dispatchGetProducts, type }: IButtonBlock) {

    return (

        <div className="button-frame">
            <div className="button-fon">
                <button className={`${classes}`} onClick={() => dispatchGetProducts(type)}></button>
            </div>
            <p>{text}</p>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Function) => ({
    dispatchGetProducts: (data: any) => dispatch(getProducts(data))
})


export default connect(null, mapDispatchToProps)(ButtonBlock)