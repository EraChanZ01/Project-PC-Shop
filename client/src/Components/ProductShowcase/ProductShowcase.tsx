import React, { useEffect } from "react";
import CONSTANTS from "../../constants"
import { connect } from "react-redux";
import { changeOrder } from '../../store/slice/productSlice'
import ProductCard from "../ProductCard/ProductCard"
import './ProductShowcase.scss'

interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    characteristics: {
        cpu: string;
        mainboard: string;
        cooling: string;
        ram: string;
        graphic: string;
        power: string;
        ssd: string;
        case: string;
        os: string;
    };

}

interface IProductShowcase {
    productList: IProduct[]
    changeOrder: Function
}

function ProductShowcase({ productList, changeOrder }: IProductShowcase) {
    useEffect(() => {
        const el = document.querySelector('.cards')
        window.scroll(0, 750)
    }, [productList])

    return (
        <div className="ProductShowcase-page">
            {productList?.length > 1 &&
                <div className="Showcase">
                    <h1></h1>
                    <select className="filter-cards" onChange={(e) => changeOrder(e.target.value)}>
                        <option value={CONSTANTS.CREATED_AT_DESC}>Firsts new</option>
                        <option value={CONSTANTS.PRICE_ASC}>Firsts cheap</option>
                        <option value={CONSTANTS.PRICE_DESC}>Firsts expensive</option>
                    </select>
                    <div className="cards">
                        {productList?.map((card: any) => <ProductCard
                            key={card.id} id={card.id}
                            price={card.price}
                            buildName={card.name}
                            description={card.ComponentsProduct}
                            photo={card.photo}
                            favorite={card.Favorite}
                        />)}
                    </div>
                </div>
            }
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        productList: state.productStore.productList,
    }
}
const mapDispatchToProps = (dispatch: Function) => (
    {
        changeOrder: (data: any) => dispatch(changeOrder(data))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductShowcase)