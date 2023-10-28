import React from "react";
import styles from './Favorite.module.scss'
import { connect } from 'react-redux'
import Layout from "../../Components/Layout/Layout";
import ProductCard from "../../Components/ProductCard/ProductCard";

interface IFavorite {
    favorite: [{
        userId: number,
        productId: number,
        createdAt: string,
        updateAt: string
    }]
}

const Favorite = ({ favorite }: IFavorite) => {

    return (
        <Layout>
            <div className={styles.mainPage}>
                <div>

                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps = (state: any) => {
    return {
        favorite: state.userStore.favorite
    }
}

export default connect(mapStateToProps, null)(Favorite)
