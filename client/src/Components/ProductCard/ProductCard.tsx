import React from "react";
import CONSTANTS from "../../constants";
import "./ProductCard.scss"



interface IProductCard {
    description: any,
    buildName?: string,
    price?: number,
    photo: string
}

export default function ProductCard({ description, buildName, price, photo }: IProductCard) {
    return (
        <div className="frame-card">
            <div className="fon-product">
                <img src={`image/${photo}`} />
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
                <button className="button-buy button-price"> B корзину</button>
            </div>
        </div>
    )
}

/*
{description.map((desc, index) => {
                    return (
                        <div key={index} className="atrebut">
                            <img src={`/image/${desc.icon}`} />
                            <h1>{desc.atrebutName}</h1>
                            <p>{desc.atrebutValue}</p>
                        </div>
                    )
                })}
*/