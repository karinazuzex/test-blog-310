import React from "react";
import NextLink from "next/link";

import { routes, consts, analytics } from "config";

import { Link } from "components/ui";

const FooterMenu = () => (
    <ul className="f-menu">
        <li className="f-menu__item">
            <NextLink href={routes.SUPPORT_PAGE.path} passHref prefetch>
                <Link theme="grey-light" className="f-menu__link">
                    {routes.SUPPORT_PAGE.name}
                </Link>
            </NextLink>
        </li>
        <li className="f-menu__item">
            <NextLink href={routes.CONTACT_PAGE.path} passHref prefetch>
                <Link theme="grey-light" className="f-menu__link">
                    {routes.CONTACT_PAGE.name}
                </Link>
            </NextLink>
        </li>
    </ul>
);

export default FooterMenu;
