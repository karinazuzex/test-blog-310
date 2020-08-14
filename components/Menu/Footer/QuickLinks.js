import React from "react";
import NextLink from "next/link";

import { routes, consts, analytics } from "config";

import { Link } from "components/ui";

const FooterMenu = () => (
    <ul className="f-menu">
        <li className="f-menu__item">
            <NextLink href={routes.HOME_PAGE.path} passHref>
                <Link theme="grey-light" className="f-menu__link">
                    {routes.HOME_PAGE.name}
                </Link>
            </NextLink>
        </li>
        <li className="f-menu__item">
            <NextLink href={routes.GET_MEMURAI_PAGE.path} passHref>
                <Link theme="grey-light" className="f-menu__link">
                    {routes.GET_MEMURAI_PAGE.name}
                </Link>
            </NextLink>
        </li>
        <li className="f-menu__item">
            <NextLink href={routes.FAQ_PAGE.path} passHref>
                <Link theme="grey-light" className="f-menu__link">
                    {routes.FAQ_PAGE.name}
                </Link>
            </NextLink>
        </li>

        <li className="f-menu__item">
            <NextLink href={routes.ABOUT_PAGE.path} passHref>
                <Link theme="grey-light" className="f-menu__link">
                    {routes.ABOUT_PAGE.name}
                </Link>
            </NextLink>
        </li>
    </ul>
);

export default FooterMenu;
