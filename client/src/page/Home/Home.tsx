import React from "react";
import Layout from "../../Components/Layout/Layout";
import BanerSwap from '../../Components/BanerSwap/BanerSwap'

function Home() {
    return (
        <div className="home-page">
            <Layout>
                <div>
                    <BanerSwap />
                </div>
            </Layout>
        </div>
    );
}

export default Home;