import React, { Component } from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

import { routes, analytics, consts } from "config";

import { Container, Row } from "components/grid";
import MainMenu from "components/Menu/Main";
import { Button, Link, Burger } from "components/ui";

import { Logo } from "svg";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFixed: false,
            isWhite: props.theme === "white",
            showMenu: false,
            banner: false,
        };
    }

    componentDidMount() {
        this.updateWindowPosition();
        window.addEventListener("scroll", this.updateWindowPosition);
        if(consts.COVID19) {
            this.setState({banner: !localStorage.bannerClose});
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.updateWindowPosition);
    }
    closeBanner = () =>{
        localStorage.setItem('bannerClose', 1);
        this.setState({banner: !localStorage.bannerClose});
    }
    openMenu = () => {
        analytics.event({
            category: "Mobile menu",
            action: "Open",
        });
        this.setState({
            showMenu: true,
        });
        this.props.onMenuChange(true);
    };

    handleMenuClose = () => {
        analytics.event({
            category: "Mobile menu",
            action: "Close",
        });
        this.setState({
            showMenu: false,
        });
        this.props.onMenuChange(false);
    };

    updateWindowPosition = () => {
        const { theme } = this.props;
        const { scrollY } = window;
        const isFixed = scrollY > 600;
        const isWhite = theme === "white" || scrollY > 600;
        this.setState({
            isFixed,
            isWhite,
        });
    };

    buttonTrigger = () => {
        if (typeof window.buttonTrigger === 'function') {
            window.buttonTrigger()
        }
    };

    render () {
        return (
            <header className={`header ${
                this.state.isWhite ? "header--white" : ""
            } ${this.state.isFixed || this.state.showMenu ? "header--fixed" : ""}`} role="header"> 
                {this.state.banner && <div className={"header--banner"}>
                Our commitment to the Memurai community during the COVID-19 pandemic. 
                <a href={routes.BLOG_PAGE.path + "/our-commitment-to-customers-during-the-covid-19-outbreak"}> Read More</a>.
                    <span onClick={this.closeBanner} className={"header--banner--close"}>×</span>
                </div>}
                <Container>
                    <Row theme="no-col" className="justify-start-xs justify-between-lg align-center-xs">
                        <NextLink href={routes.HOME_PAGE.path} passHref>
                            <Link className="header__logo">
                                <Logo className={`header__logo--img ${this.state.isWhite ? "black" : ""}`} />
                            </Link>
                        </NextLink>
                        <MainMenu
                            theme={this.state.isWhite ? "white" : ""}
                            onClose={this.handleMenuClose}
                        />
                        <NextLink href={routes.GET_MEMURAI_PAGE.path} passHref>
                            <Button
                                as="a"
                                type="hollow"
                                theme={`${
                                    this.state.isWhite ? "red-black versioned-black" : "red-white"
                                } versioned ${
                                    this.state.isFixed ? "versioned-hidden" : ""
                                }`}
                                className="header__button header__button--action"
                                onClick={this.buttonTrigger}>
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
