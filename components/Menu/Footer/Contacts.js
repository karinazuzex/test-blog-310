import React from "react";
import NextLink from "next/link";

import { routes } from "config";
import { Column } from "components/grid";
import { Link } from "components/ui";
import { LogoFooter } from "svg";

const Contacts = () => (
  <Column className="align-center-xs align-start-lg footer__contacts-column">
    <NextLink href={routes.HOME_PAGE.path} passHref prefetch>
      <Link className="header__logo">
        <LogoFooter className={`header__logo--img`} />
      </Link>
    </NextLink>
    <div className="footer__contacts">
      Memurai 113 Cherry Street #11630 Seattle, WA 98104 <br />
      © 2019-2020 All rights reserved by Janea Systems, Inc.
      <br />
      <span className="footer__terms">
        <NextLink href={routes.TERMS_PAGE.path} passHref prefetch>
          <Link theme="grey-light">{routes.TERMS_PAGE.name}</Link>
        </NextLink>
        <NextLink href={routes.PRIVACY_PAGE.path} passHref prefetch>
          <Link theme="grey-light">{routes.PRIVACY_PAGE.name}</Link>
        </NextLink>
        <NextLink href={routes.COOKIE_PAGE.path} passHref prefetch>
          <Link theme="grey-light">{routes.COOKIE_PAGE.name}</Link>
        </NextLink>
      </span>
    </div>
  </Column>
);

export default Contacts;
