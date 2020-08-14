import React from "react";
import NextLink from "next/link";

import { routes, consts, analytics } from "config";

import { Link } from "components/ui";

const FooterMenu = () => (
    <ul className="f-menu">
        <li className="f-menu__item">
            <Link
                href={consts.MEMURAI_DOCS_LINK}
                theme="grey-light"
                className="f-menu__link"
                onClick={() => {
                    analytics.event({
                        category: "External link",
                        action: "Open",
                        label: "Documentation"
                    });
                }}
            >
                Documentation
            </Link>
        </li>
        <li className="f-menu__item">
            <NextLink href={routes.BLOG_PAGE.path} passHref>
                <Link theme="grey-light" className="f-menu__link">
                    {routes.BLOG_PAGE.name}
                </Link>
            </NextLink>
        </li>
        <li className="f-menu__item">
            <NextLink href={routes.NEWSLETTER_PAGE.path} passHref>
                <Link theme="grey-light" className="f-menu__link">
                    {routes.NEWSLETTER_PAGE.name}
                </Link>
            </NextLink>
        </li>
    </ul>
);

export default FooterMenu;
