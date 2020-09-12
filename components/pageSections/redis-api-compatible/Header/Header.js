import { Logo } from "svg";
import NextLink from "next/link";
import { Link } from "./../../../ui";
import { Container } from './../../../grid';
import { routes } from "config";

function Header() {
  return (
    <header className="header">
      <Container>
        <NextLink href={routes.HOME_PAGE.path} passHref>
          <Link className="header__logo">
            <Logo />
          </Link>
        </NextLink>
      </Container>
    </header>
  );
}

export default Header;