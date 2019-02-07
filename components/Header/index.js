import React, { Component } from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

import { routes } from "config";

import { Container, Row } from "components/grid";
import MainMenu from "components/Menu/Main";
import Button from "components/ui/Button";
import Link from "components/ui/Link";
import { Logo } from "svg";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isScrolled: false,
            isWhite: props.theme === "white",
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleWindowScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleWindowScroll);
    }

    handleWindowScroll = () => {
        const { theme } = this.props;
        const { scrollY } = window;
        const isScrolled = theme === "white" ? scrollY > 30 : scrollY > 600;
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
                <Container theme="big">
                    <Row theme="no-col" className="justify-between-xs align-center-xs">
                        <NextLink href={routes.HOME_PAGE.path}>
                            <Link className="header__logo">
                                <Logo className={`header__logo--img ${this.state.isWhite ? "black" : ""}`} />
                            </Link>
                        </NextLink>
                        <MainMenu theme={this.state.isWhite ? "white" : ""} />
                        <NextLink href={routes.HOME_PAGE.path}>
                            <Button as="a" type="hollow" theme={`${
                                this.state.isWhite ? "red-black" : "red-white"
                            } versioned ${
                                this.state.isScrolled ? "versioned-hidden" : ""
                            }`} className="header__button header__button--action">
                                Get Menurai
                            </Button>
                        </NextLink>
                    </Row>
                </Container>
            </header>
        );
    }
}

Header.propTypes = {
    theme: PropTypes.string,
};

export default Header;
