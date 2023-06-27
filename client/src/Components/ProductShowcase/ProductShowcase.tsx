import React, { useEffect } from "react";
import CONSTANTS from "../../constants"
import { connect } from "react-redux";
import { changeOrder } from '../../store/slice/productSlice'
import ProductCard from "../ProductCard/ProductCard"
import './ProductShowcase.scss'


function ProductShowcase({ productList, changeOrder }: any) {
    return (
        <div className="ProductShowcase-page">
            {productList.length > 1 &&
                <div className="Showcase">
                    <h1></h1>
                    <select className="filter-cards" onChange={(e) => changeOrder(e.target.value)}>
                        <option value={CONSTANTS.CREATED_AT_DESC}>Firsts new</option>
                        <option value={CONSTANTS.PRICE_ASC}>Firsts cheap</option>
                        <option value={CONSTANTS.PRICE_DESC}>Firsts expensive</option>
                    </select>
                    <div className="cards">
                        {productList?.map((card: any) => <ProductCard key={card.id} id={card.id} price={card.price} buildName={card.name} description={card.ComponentsProduct} photo={card.photo} />)}
                    </div>
                </div>
            }
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        ...state.productStore
    }
}
const mapDispatchToProps = (dispatch: Function) => (
    {
        changeOrder: (data: any) => dispatch(changeOrder(data))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductShowcase)