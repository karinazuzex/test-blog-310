import React from "react";

import NextLink from "next/link";
import Link from "components/ui/Link";
import { routes } from "config";

const FooterMenu = () => (
    <ul className="f-menu">
        <li className="f-menu__item">
            <NextLink href={routes.HOME_PAGE.path}>
                <Link href="" theme="grey-light" className="f-menu__link">
                    {routes.HOME_PAGE.name}
                </Link>
            </NextLink>
        </li>
        <li className="f-menu__item">
            <NextLink href={routes.WHY_MEMURAI_PAGE.path}>
                <Link href="" theme="grey-light" className="f-menu__link">
                    {routes.WHY_MEMURAI_PAGE.name}
                </Link>
            </NextLink>
        </li>
        <li className="f-menu__item">
            <NextLink href={routes.DOCUMENTATION_PAGE.path}>
                <Link href="" theme="grey-light" className="f-menu__link">
                    {routes.DOCUMENTATION_PAGE.name}
                </Link>
            </NextLink>
        </li>
        <li className="f-menu__item">
            <NextLink href={routes.ABOUT_PAGE.path}>
                <Link href="" theme="grey-light" className="f-menu__link">
                    {routes.ABOUT_PAGE.name}
                </Link>
            </NextLink>
        </li>
        <li className="f-menu__item">
            <NextLink href={routes.CONTACT_PAGE.path}>
                <Link href="" theme="grey-light" className="f-menu__link">
                    {routes.CONTACT_PAGE.name}
                </Link>
            </NextLink>
        </li>
    </ul>
);

export default FooterMenu;
