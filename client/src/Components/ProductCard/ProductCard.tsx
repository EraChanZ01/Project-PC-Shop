import React from "react";
import CONSTANTS from "../../constants";
import { addProductToFavorite } from '../../store/slice/productSlice'
import { changeBasket } from "../../store/slice/userSlice"
import "./ProductCard.scss"
import { connect } from "react-redux";



interface IProductCard {
    id: number
    description: any,
    buildName?: string,
    price: number,
    photo: string,
    userId: any
    changeBasket: Function,
    dispatchProductToFavorite: Function
}

function ProductCard({ description, buildName, price, photo, id, changeBasket, userId, dispatchProductToFavorite }: IProductCard) {

    const addProductToBasket = () => {
        const basketValue = localStorage.getItem('basket')
        if (basketValue === null) {
            localStorage.setItem('basket', JSON.stringify([{ id, price, buildName, photo }]))
            changeBasket([{ id, price, buildName, photo }])
        } else {
            const basket = JSON.parse(basketValue)
            localStorage.setItem('basket', JSON.stringify([...basket, { id, price, buildName, photo }]))
            changeBasket([...basket, { id, price, buildName, photo }])
        }
    }
    const addProductToFavorite = () => {
        const basketValue = localStorage.getItem('favorite')
        if (basketValue === null) {
            localStorage.setItem('favorite', JSON.stringify([{ id, price, buildName, photo }]))
            dispatchProductToFavorite({ userId: 1, productId: id })
        } else {
            const basket = JSON.parse(basketValue)
            localStorage.setItem('favorite', JSON.stringify([...basket, { id, price, buildName, photo }]))
            dispatchProductToFavorite({ userId: 1, productId: id })
        }
    }

    return (
        <div className="frame-card">
            <div className="fon-product">
                <img className="icon-favorite" src={`image/heart.png`} onClick={addProductToFavorite} />
                <img className="product-img" src={`image/${photo}`} />
                <p>{buildName}</p>
            </div>
            <div className="part-atrebut">
                {
                    Object.keys(description).map((key, index) => {
                        const constants: any = CONSTANTS
                        return (<div key={index} className="atrebut">
                            <img src={`/image/${key}.svg`} />
                            <h1>{constants[key]}</h1>
                            <p>{description[key]}</p>
                        </div>)
                    })
                }
            </div>
            <div className="part-price">
                <p><span>Price:</span>{`${price} $`}</p>
                <button className="button-info button-price">Подробнее</button>
                <button className="button-buy button-price" onClick={addProductToBasket}> B корзину</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Function) => (
    {
        changeBasket: (data: any) => dispatch(changeBasket(data)),
        dispatchProductToFavorite: (data: any) => dispatch(addProductToFavorite(data))
    }
)
const mapStateToProps = (state: any) => {
    return {
        userId: state.userStore.data?.id
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)