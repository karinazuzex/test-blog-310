import NextLink from 'next/link'

import { routes } from 'config'
import { Column } from 'components/grid'
import { Link } from 'components/ui'
import { LogoFooter } from 'svg'

const Contacts = () => (
    <Column className="align-start-xs align-start-lg footer__contacts-column">
        <NextLink href={routes.HOME_PAGE.path} passHref>
            <Link className="header__logo">
                <LogoFooter className={`header__logo--img`} />
            </Link>
        </NextLink>
        <div className="footer__contacts text-left">
            Memurai
            <br />
            113 Cherry Street #11630 Seattle, WA 98104 <br />
            © 2020 All rights reserved by Janea Systems, Inc.
            <br />
            <span className="footer__terms">
                <NextLink href={routes.TERMS_PAGE.path} passHref>
                    <Link theme="grey-light">{routes.TERMS_PAGE.name}</Link>
                </NextLink>
            </span>
        </div>
    </Column>
)

export default Contacts
