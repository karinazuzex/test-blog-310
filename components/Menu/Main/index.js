import { useState } from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

import { routes, consts, analytics } from "config";

import { Link, Button } from "components/ui";

import XIcon from "svg/XIcon";

const MainMenu = ({ theme, onClose }) => {
    const [showMenu, setShowMenu] = useState("");

    const onLinkHover = (e) => {
        const hoverTag = e.target.tagName.toLowerCase();
        let linkName = "";
        if (hoverTag == "a") {
            linkName = e.target.innerHTML;
        }
        if (hoverTag == "li") {
            linkName = e.target.childNodes[0].innerHTML;
        }
        setShowMenu(linkName);
    };

    const linkTheme = theme === "white" ? "black" : "white";
    return (
        <nav className="m-menu">
            <ul className="m-menu__content">
                <li className="m-menu__item m-menu__item--mobile">
                    <NextLink href={routes.HOME_PAGE.path} passHref>
                        <Link theme={linkTheme} className="m-menu__link">
                            {routes.HOME_PAGE.name}
                        </Link>
                    </NextLink>
                </li>
                <li
                    className="m-menu__item"
                    onMouseEnter={onLinkHover}
                    onMouseLeave={onLinkHover}
                    onClick={onLinkHover}
                >
                    <NextLink href="#" passHref>
                        <Link
                            theme={linkTheme}
                            className={`m-menu__link ${
                                showMenu == "Solutions" ? "link-hover" : ""
                            }`}
                        >
                            {routes.SOLUTIONS_PAGE.name}
                        </Link>
                    </NextLink>
                    <i
                        className={`arrow down ${
                            showMenu == "Solutions" ? "arrow-hover" : ""
                        }`}
                    ></i>
                    {showMenu == "Solutions" && (
                        <ul className="m-menu__sub-menu">
                            <span className="m-menu__sub-menu--title text-bold">
                                use cases
                            </span>
                            <li className="m-menu__sub-menu--item">
                                <NextLink
                                    href={routes.SOLUTIONS_PAGE.path}
                                    passHref
                                >
                                    <Link
                                        theme={linkTheme}
                                        className="m-menu__sub-menu--link"
                                    >
                                        in-memory cache
                                        <br />
                                        <span className="m-menu__sub-menu--description">
                                            The simplicity of Redis cache available on Windows
                                        </span>
                                    </Link>
                                </NextLink>
                            </li>
                            <li className="m-menu__sub-menu--item">
                                <NextLink
                                    href="/blog/[slug]"
                                    as={`/blog/why-real-time-inventory-is-more-important-than-ever`}
                                    passHref
                                >
                                    <Link
                                        theme={linkTheme}
                                        className="m-menu__sub-menu--link"
                                    >
                                        real time inventory
                                        <br />
                                        <span className="m-menu__sub-menu--description">
                                            Diverse inventories readily available with a single interface
                                        </span>
                                    </Link>
                                </NextLink>
                            </li>
                            <span className="m-menu__sub-menu--title text-bold">
                                industries
                            </span>
                            <li className="m-menu__sub-menu--item">
                                <NextLink
                                    href={routes.FINANCIAL_SERVICE_PAGE.path}
                                    passHref
                                >
                                    <Link
                                        theme={linkTheme}
                                        className="m-menu__sub-menu--link"
                                    >
                                        financial services
                                        <br />
                                        <span className="m-menu__sub-menu--description">
                                            Microsecond latency reads and writes
                                        </span>
                                    </Link>
                                </NextLink>
                            </li>
                            <li className="m-menu__sub-menu--item">
                                <NextLink href={routes.IOT_PAGE.path} passHref>
                                    <Link
                                        theme={linkTheme}
                                        className="m-menu__sub-menu--link"
                                    >
                                        IoT
                                        <br />
                                        <span className="m-menu__sub-menu--description">
                                            Simple and flexible commands for any device
                                        </span>
                                    </Link>
                                </NextLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li
                    className="m-menu__item"
                    onMouseEnter={onLinkHover}
                    onMouseLeave={onLinkHover}
                >
                    <NextLink href="#" passHref>
                        <Link
                            theme={linkTheme}
                            className={`m-menu__link ${
                                showMenu == "Learn" ? "link-hover" : ""
                            }`}
                        >
                            Learn
                        </Link>
                    </NextLink>
                    <i
                        className={`arrow down ${
                            showMenu == "Learn" ? "arrow-hover" : ""
                        }`}
                    ></i>
                    {showMenu == "Learn" && (
                        <ul className="m-menu__sub-menu">
                            <li className="m-menu__sub-menu--item">
                                <Link
                                    href={consts.MEMURAI_DOCS_LINK}
                                    theme={linkTheme}
                                    className="m-menu__sub-menu--link"
                                    onClick={() => {
                                        analytics.event({
                                            category: "External link",
                                            action: "Open",
                                            label: "Documentation",
                                        });
                                    }}
                                >
                                    DOCUMENTATION
                                    <br />
                                    <span className="m-menu__sub-menu--description">
                                        A brief description for the page
                                    </span>
                                </Link>
                            </li>
                            <li className="m-menu__sub-menu--item">
                                <NextLink href={routes.FAQ_PAGE.path} passHref>
                                    <Link
                                        theme={linkTheme}
                                        className="m-menu__sub-menu--link"
                                    >
                                        {routes.FAQ_PAGE.name}
                                        <br />
                                        <span className="m-menu__sub-menu--description">
                                            A brief description for the page
                                        </span>
                                    </Link>
                                </NextLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li
                    className="m-menu__item m-menu__item--mobile"
                    onMouseEnter={onLinkHover}
                    onMouseLeave={onLinkHover}
                >
                    <NextLink href={routes.ABOUT_PAGE.path} passHref>
                        <Link theme={linkTheme} className="m-menu__link">
                            {routes.ABOUT_PAGE.name}
                        </Link>
                    </NextLink>
                </li>
                <li
                    className="m-menu__item"
                    onMouseEnter={onLinkHover}
                    onMouseLeave={onLinkHover}
                >
                    <NextLink href={routes.CONTACT_PAGE.path} passHref>
                        <Link theme={linkTheme} className="m-menu__link">
                            {routes.CONTACT_PAGE.name}
                        </Link>
                    </NextLink>
                </li>
                <li
                    className="m-menu__item"
                    onMouseEnter={onLinkHover}
                    onMouseLeave={onLinkHover}
                >
                    <NextLink href={routes.BLOG_PAGE.path} passHref>
                        <Link theme={linkTheme} className="m-menu__link">
                            {routes.BLOG_PAGE.name}
                        </Link>
                    </NextLink>
                </li>
                <li
                    className="m-menu__item m-menu__item--mobile"
                    onMouseEnter={onLinkHover}
                    onMouseLeave={onLinkHover}
                >
                    <NextLink href={routes.GET_MEMURAI_PAGE.path} passHref>
                        <Link theme={linkTheme} className="m-menu__link">
                            {routes.GET_MEMURAI_PAGE.name}
                        </Link>
                    </NextLink>
                </li>
            </ul>
            <Button onClick={onClose} className="m-menu__close">
                <XIcon />
            </Button>
        </nav>
    );
};

MainMenu.propTypes = {
    theme: PropTypes.string,
    onClose: PropTypes.func,
};

export default MainMenu;
