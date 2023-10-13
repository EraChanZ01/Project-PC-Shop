import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { increaseQuantityProduct, deleteProductFromBasket } from '../../store/slice/userSlice'
import Parameter from './Parameter/Parameter'
import './ProductCardBasket.scss'

interface IProductCardBasket {
    id: string,
    photo: string,
    name: string,
    price: string,
    quantity: number,
    increaseQuantity: Function,
    deleteProductFromBasket: Function,
    description: {
        cpu: string,
        mainboard: string,
        ssd: string,
        graphic: string,
        ram: string,
        case: string,
    }
}

const ProductCardBasket = ({ id, photo, name, price, description, quantity, increaseQuantity, deleteProductFromBasket }: IProductCardBasket) => {

    const [count, setCount] = useState(quantity)

    useEffect(() => {
        increaseQuantity({ id, quantity: count })
    }, [count])


    const deleteFromBasket = async () => {
        await deleteProductFromBasket({ id })
    }

    const handleChange = ({ target }: { target: { value: string } }) => {
        if (Number(target.value) > 0) {
            setCount(Number(target.value))
        }
    }

    return (
        <div className='ProductCardBasket'>
            <div className='photo-part'>
                <img className="photo" src={`image/${photo}`} />
                <button className='view-product'>Quick View</button>
            </div>
            <div className='features-part'>
                <p className='product-name'>{name}</p>
                <div className='params-part'>
                    <Parameter name="cpu" value={`${description['cpu']}`} />
                    <Parameter name="mainboard" value={`${description['mainboard']}`} />
                    <Parameter name="ssd" value={`${description['ssd']}`} />
                    <Parameter name="graphic" value={`${description['graphic']}`} />
                    <Parameter name="ram" value={`${description['ram']}`} />
                    <Parameter name="case" value={`${description['case']}`} />
                </div>
            </div>
            <div className='price-part'>
                <div className='price'>{price} $</div>
                <div className='counter'>
                    <button onClick={() => { if (count > 1) setCount(count - 1) }}> - </button>
                    <input value={count} onChange={handleChange} />
                    <button onClick={() => setCount(count + 1)}> + </button>
                </div>
                <div className='button-part'>
                    <button>Postpone</button>
                    <button onClick={deleteFromBasket}>Delete</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Function) => ({
    increaseQuantity: (data: any) => dispatch(increaseQuantityProduct(data)),
    deleteProductFromBasket: (data: any) => dispatch(deleteProductFromBasket(data))
})

export default connect(null, mapDispatchToProps)(ProductCardBasket)