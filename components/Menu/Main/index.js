import React, { Component } from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

import Button from "components/ui/Button";
import Link from "components/ui/Link";
import { routes } from "config";

import XIcon from "svg/XIcon";

class MainMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        };
    }

    closeMenu = () => {
        this.setState({
            active: false,
        });
    };

    openMenu = () => {
        console.log(2);
        this.setState({
            active: true,
        });
    };

    render() {
        const { theme } = this.props;
        const linkTheme = theme === "white" ? "black" : "white";
        return (
            <nav className={`m-menu ${this.state.active ? "m-menu--active" : ""}`}>
                <ul className="m-menu__content">
                    <li className="m-menu__item m-menu__item--mobile">
                        <NextLink href={routes.HOME_PAGE.path}>
                            <Link theme={linkTheme} className="m-menu__link">
                                {routes.HOME_PAGE.name}
                            </Link>
                        </NextLink>
                    </li>
                    <li className="m-menu__item">
                        <NextLink href={routes.WHY_MEMURAI_PAGE.path}>
                            <Link theme={linkTheme} className="m-menu__link">
                                {routes.WHY_MEMURAI_PAGE.name}
                            </Link>
                        </NextLink>
                    </li>
                    <li className="m-menu__item">
                        <NextLink href={routes.DOCUMENTATION_PAGE.path}>
                            <Link theme={linkTheme} className="m-menu__link">
                                {routes.DOCUMENTATION_PAGE.name}
                            </Link>
                        </NextLink>
                    </li>
                    <li className="m-menu__item">
                        <NextLink href={routes.ABOUT_PAGE.path}>
                            <Link theme={linkTheme} className="m-menu__link">
                                {routes.ABOUT_PAGE.name}
                            </Link>
                        </NextLink>
                    </li>
                    <li className="m-menu__item">
                        <NextLink href={routes.CONTACT_PAGE.path}>
                            <Link theme={linkTheme} className="m-menu__link">
                                {routes.CONTACT_PAGE.name}
                            </Link>
                        </NextLink>
                    </li>
                    <li className="m-menu__item m-menu__item--mobile">
                        <NextLink href={routes.GET_MEMURAI_PAGE.path}>
                            <Link theme={linkTheme} className="m-menu__link">
                                {routes.GET_MEMURAI_PAGE.name}
                            </Link>
                        </NextLink>
                    </li>
                </ul>
                <Button onClick={this.closeMenu} className="m-menu__close">
                    <XIcon />
                </Button>
            </nav>
        );
    }
}

MainMenu.propTypes = {
    theme: PropTypes.string,
};

export default MainMenu;
