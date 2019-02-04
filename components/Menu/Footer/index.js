import React from "react";

// import Link as NextLink from "next/link";
import Link from "components/ui/Link";

const FooterMenu = () => (
    <ul className="f-menu">
        <li className="f-menu__item">
            <Link href="" theme="grey-light" className="f-menu__link">
                Home
            </Link>
        </li>
        <li className="f-menu__item">
            <Link href="" theme="grey-light" className="f-menu__link">
                Why memurai
            </Link>
        </li>
        <li className="f-menu__item">
            <Link href="" theme="grey-light" className="f-menu__link">
                Documentation
            </Link>
        </li>
        <li className="f-menu__item">
            <Link href="" theme="grey-light" className="f-menu__link">
                Frequently asked questions
            </Link>
        </li>
        <li className="f-menu__item">
            <Link href="" theme="grey-light" className="f-menu__link">
                About
            </Link>
        </li>
        <li className="f-menu__item">
            <Link href="" theme="grey-light" className="f-menu__link">
                Contact
            </Link>
        </li>
    </ul>
);

export default FooterMenu;
