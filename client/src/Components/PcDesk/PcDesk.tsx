import React, { useEffect } from "react";
import CONSTANTS from "../../constants"
import { connect } from "react-redux";
import { changeOrder } from '../../store/slice/productSlice'
import ProductCard from "../ProductCard/ProductCard"
import './PcDesk.scss'


function PcDesk({ productList, changeOrder }: any) {
    return (
        <div className="PcDesk-page">
            {productList.length > 1 &&
                <div className="Showcase">
                    <h1></h1>
                    <select className="filter-cards" onChange={(e) => changeOrder(e.target.value)}>
                        <option value={CONSTANTS.CREATED_AT_DESC}>Firsts new</option>
                        <option value={CONSTANTS.PRICE_ASC}>Firsts cheap</option>
                        <option value={CONSTANTS.PRICE_DESC}>Firsts expensive</option>
                    </select>
                    <div className="cards">
                        {productList?.map((card: any) => <ProductCard price={card.price} buildName={card.name} description={card.ComponentsProduct} photo={card.photo} />)}
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

export default connect(mapStateToProps, mapDispatchToProps)(PcDesk)


/*
<ProductCard description={[
                        { icon: 'cpu.svg', atrebutName: CONSTANTS["cpu"], atrebutValue: "Intel Core i5-13400F" },
                        { icon: 'motherboard.svg', atrebutName: "Motherboard", atrebutValue: "ASUS TUF Gaming B660" },
                        { icon: 'heatsink.svg', atrebutName: "CPU Cooling", atrebutValue: "ARCTIC Liquid Freezer" },
                        { icon: 'ram-memory.svg', atrebutName: "RAM Momory", atrebutValue: "G.SKILL Trident Z RGB 16gb 3200MHz" },
                    ]}
                        buildName="ONE" price={1000}
                    />
                    <ProductCard description={[
                        { icon: '23', atrebutName: "proc", atrebutValue: "ryf343h" },
                        { icon: '23', atrebutName: "proc", atrebutValue: "ryf343h" },
                        { icon: '23', atrebutName: "proc", atrebutValue: "ryf343h" },
                        { icon: '23', atrebutName: "proc", atrebutValue: "ryf343h" },
                    ]} buildName="PLUS" price={1500} />
                    <ProductCard description={[
                        { icon: '23', atrebutName: "proc", atrebutValue: "ryf343h" },
                        { icon: '23', atrebutName: "proc", atrebutValue: "ryf343h" },
                        { icon: '23', atrebutName: "proc", atrebutValue: "ryf343h" },
                        { icon: '23', atrebutName: "proc", atrebutValue: "ryf343h" },
                    ]} buildName="MAX" price={2000} />
*/