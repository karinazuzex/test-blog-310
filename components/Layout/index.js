import "assets/scss/index.scss";

import React from "react";

import Header from "components/Header";
import Footer from "components/Footer";

const Layout = (props) => (
    <div className="layout">
        <Header />
        {props.children}
        <Footer />
    </div>
);

export default Layout;
