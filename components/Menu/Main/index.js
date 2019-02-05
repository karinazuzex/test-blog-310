import React from "react";
import PropTypes from "prop-types";

import NextLink from "next/link";
import Link from "components/ui/Link";
import { routes } from "config";

const MainMenu = ({ theme = "" }) => {
    const linkTheme = theme === "white" ? "black" : "white";
    return (
        <ul className="m-menu">
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
        </ul>
    );
};

MainMenu.propTypes = {
    theme: PropTypes.string,
};

export default MainMenu;
