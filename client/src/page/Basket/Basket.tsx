import React, { useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import ProductCardBasket from "../../Components/ProductCardBasket/ProductCardBasket"
import styles from './Basket.module.scss'
import { connect } from 'react-redux'

const Basket = ({ basket, discount }: any) => {


    const fullPrice = basket.reduce((acum: Number, value: any) => acum + value.price, 0)
    return (
        <Layout>
            <div className={`${styles.mainPage} page`}>
                <div className={styles.basketHeader}>
                    <p className={styles.headerTitle}>Basket</p>
                    <p className={styles.basketQuantity}>{basket.length}</p>
                    <p className={styles.shareBasket}>Share basket</p>
                </div>
                <div className={styles.basketMain}>
                    <div className={styles.basketList}>
                        {
                            basket.map((el: any, index: any) => <ProductCardBasket
                                key={index}
                                id={el.id}
                                photo={el.photo}
                                name={el.buildName}
                                price={el.price}
                                description={el.description}
                                quantity={el.quantity} />)
                        }
                    </div>
                    <div className={styles.basketRight}>
                        <div className={styles.basketCheck}>
                            <button className={styles.buttonPlaceOrder}>Place an order</button>
                            <p className={styles.hint}>Available delivery methods and times can be selected at checkout</p>
                            <div className={styles.orderInfo}>
                                <div className={`${styles.headerOrder} ${styles.orderAttribute} `}>
                                    <p>Your basket:</p><p>{basket.reduce((accum: any, currentValue: any) => accum + currentValue.quantity, 0)} product</p>
                                </div>
                                <div className={styles.orderAttribute}>
                                    <p>Product</p><p>{fullPrice} $</p>
                                </div>
                                <div className={`${styles.orderAttribute} ${styles.orderDiscount}`}>
                                    <p>Discount</p><p className={styles.discount}>-{discount}$</p>
                                </div>
                            </div>
                            <div className={styles.priceOrder}>
                                <p>General price:</p><p>{fullPrice - discount} $</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}
const mapStateToProps = (state: any) => {
    return {
        ...state.userStore
    }
}

export default connect(mapStateToProps, null)(Basket)