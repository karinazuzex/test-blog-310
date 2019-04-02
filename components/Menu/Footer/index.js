import React from "react";
import NextLink from "next/link";

import { routes, consts } from "config";

import Link from "components/ui/Link";

const FooterMenu = () => (
    <ul className="f-menu">
        <li className="f-menu__item">
            <NextLink href={routes.HOME_PAGE.path}>
                <Link theme="grey-light" className="f-menu__link">
                    {routes.HOME_PAGE.name}
                </Link>
            </NextLink>
        </li>
        <li className="f-menu__item">
            <NextLink href={routes.WHY_MEMURAI_PAGE.path}>
                <Link theme="grey-light" className="f-menu__link">
                    {routes.WHY_MEMURAI_PAGE.name}
                </Link>
            </NextLink>
        </li>
        <li className="f-menu__item">
            <Link
                href={consts.MEMURAI_DOCS_LINK}
                theme="grey-light"
                className="f-menu__link"
                rel="noreferrer noopener"
                target="_blank"
            >
                Documentation
            </Link>
        </li>
        <li className="f-menu__item">
            <NextLink href={routes.ABOUT_PAGE.path}>
                <Link theme="grey-light" className="f-menu__link">
                    {routes.ABOUT_PAGE.name}
                </Link>
            </NextLink>
        </li>
        <li className="f-menu__item">
            <NextLink href={routes.CONTACT_PAGE.path}>
                <Link theme="grey-light" className="f-menu__link">
                    {routes.CONTACT_PAGE.name}
                </Link>
            </NextLink>
        </li>
    </ul>
);

export default FooterMenu;
