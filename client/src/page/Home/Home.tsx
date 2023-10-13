import React from "react";
import { connect } from "react-redux";
import Layout from "../../Components/Layout/Layout";
import BanerSwap from '../../Components/BanerSwap/BanerSwap'
import ProductShowcase from '../../Components/ProductShowcase/ProductShowcase'


function Home() {
    return (
        <div className="home-page">
            <div className="main-page page">
                <Layout>
                    <BanerSwap />
                    <ProductShowcase />
                </Layout>
            </div>
            
        </div>
    );
}
const mapStateToProps = (state: any) => {
    return {
        ...state.modalStore
    }
}
const mapDispatchToProps = (dispatch: Function) => ({

})

export default connect(mapStateToProps, null)(Home)