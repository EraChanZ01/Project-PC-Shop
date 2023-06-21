import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props: any) {
    return (
        <div className="Layout-page">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;