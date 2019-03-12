import React, { Component } from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

import { routes } from "config";

import { Container, Row } from "components/grid";
import MainMenu from "components/Menu/Main";
import Button from "components/ui/Button";
import Link from "components/ui/Link";
import Burger from "components/ui/Burger";

import { Logo } from "svg";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isScrolled: false,
            isWhite: props.theme === "white",
            showMenu: false,
        };
    }

    componentDidMount() {
        this.updateWindowPosition();
        window.addEventListener("scroll", this.updateWindowPosition);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.updateWindowPosition);
    }

    openMenu = () => {
        this.setState({
            showMenu: true,
        });
        this.props.onMenuChange(true);
    };

    handleMenuClose = () => {
        this.setState({
            showMenu: false,
        });
        this.props.onMenuChange(false);
    };

    updateWindowPosition = () => {
        const { theme } = this.props;
        const { scrollY } = window;
        const isScrolled = scrollY > 600;
        const isWhite = theme === "white" || scrollY > 600;
        this.setState({
            isScrolled,
            isWhite,
        });
    };

    render () {
        return (
            <header className={`header ${
                this.state.isWhite ? "header--white" : ""
            } ${this.state.isScrolled ? "header--scrolled" : ""}`} role="header">
                <Container>
                    <Row theme="no-col" className="justify-center-xs justify-between-lg align-center-xs">
                        <NextLink href={routes.HOME_PAGE.path}>
                            <Link className="header__logo">
                                <Logo className={`header__logo--img ${this.state.isWhite ? "black" : ""}`} />
                            </Link>
                        </NextLink>
                        <MainMenu
                            theme={this.state.isWhite ? "white" : ""}
                            onClose={this.handleMenuClose}
                        />
                        <NextLink href={routes.GET_MEMURAI_PAGE.path}>
                            <Button as="a" type="hollow" theme={`${
                                this.state.isWhite ? "red-black" : "red-white"
                                } versioned ${
                                this.state.isScrolled ? "versioned-hidden" : ""
                                }`} className="header__button header__button--action">
                                {routes.GET_MEMURAI_PAGE.name}
                            </Button>
                        </NextLink>
                    </Row>
                </Container>
                <Burger
                    className={`header__burger ${this.state.isWhite ? "burger--black" : ""}`}
                    onClick={this.openMenu}
                />
            </header>
        );
    }
}

Header.propTypes = {
    theme: PropTypes.string,
    onMenuChange: PropTypes.func,
};

export default Header;
