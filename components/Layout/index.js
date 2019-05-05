import "static/scss/index.scss";

import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import Notifications from "react-notification-system-redux";
import { connect } from "react-redux";

import { head, analytics } from "config";

import Header from "components/Header";
import Footer from "components/Footer";

class Layout extends PureComponent {
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
        const { theme, children, notifications } = this.props;
        return (
            <Fragment>

                <div className={`layout ${this.state.showMenu ? "layout--show-menu" : ""}`}>
                    <Header
                        theme={theme}
                        onMenuChange={this.handleMenuChange}
                    />
                    <main role="main">
                        {children}
                    </main>
                    <Footer />
                </div>
                <Notifications
                    style={false}
                    notifications={notifications}
                />
            </Fragment>
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
    notifications: PropTypes.arrayOf(PropTypes.shape({
        autoDismiss: PropTypes.number,
        level: PropTypes.string.isRequired,
        message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        position: PropTypes.string.isRequired,
        uid: PropTypes.any.isRequired,
    })),
};

const mapStateToProps = state => ({
    notifications: state.notifications,
});

export default connect(mapStateToProps)(Layout);
