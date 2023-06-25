import React from "react";
import { connect } from "react-redux";
import { getProducts } from "../../../store/slice/productSlice"

interface IButtonBlock {
    text: string
    classes: string
    dispatchGetProducts: (data: any) => void
    type: string,
    order: any
}

function ButtonBlock({ text, classes, dispatchGetProducts, type, order }: IButtonBlock) {

    return (

        <div className="button-frame">
            <div className="button-fon">
                <button className={`${classes}`} onClick={() => dispatchGetProducts({ type, order })}></button>
            </div>
            <p>{text}</p>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        order: state.productStore.order
    }
}

const mapDispatchToProps = (dispatch: Function) => ({
    dispatchGetProducts: (data: any) => dispatch(getProducts(data))
})



export default connect(mapStateToProps, mapDispatchToProps)(ButtonBlock)