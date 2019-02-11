import "static/scss/index.scss";

import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "components/Header";
import Footer from "components/Footer";

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
        };
    }

    handleMenuChange = (state) => {
        this.setState({
            showMenu: state,
        });
    };

    render() {
        const { theme, children } = this.props;
        return (
            <div className={`layout ${this.state.showMenu ? "layout--show-menu" : ""}`}>
                <Header
                    theme={theme}
                    onMenuChange={this.handleMenuChange}
                />
                {children}
                <Footer />
            </div>
        );
    }
}

Layout.propTypes = {
    theme: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string,
    ]),
};

export default Layout;
