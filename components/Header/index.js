import React from "react";
import PropTypes from "prop-types";

import { Container, Row } from "components/grid";
import MainMenu from "components/Menu/Main";
import Button from "components/ui/Button";
import { Logo } from "svg";

const Header = () => (
    <header className="header" role="header">
        <Container theme="big">
            <Row theme="no-col" className="justify-between-xs align-center-xs">
                <div className="header__logo">
                    <Logo className="header__logo--img" />
                </div>
                <MainMenu/>
                <Button type="hollow" theme="red-white versioned" className="header__button header__button--action">
                    Get Menurai
                </Button>
            </Row>
        </Container>
    </header>
);

export default Header;
