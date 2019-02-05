import "assets/scss/index.scss";

import React from "react";
import PropTypes from "prop-types";

import Header from "components/Header";
import Footer from "components/Footer";

const Layout = ({ children, theme = "" }) => (
    <div className="layout">
        <Header theme={theme} />
            {children}
        <Footer />
    </div>
);

Layout.propTypes = {
    theme: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string,
    ]),
};

export default Layout;
