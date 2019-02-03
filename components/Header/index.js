import React from "react";
import PropTypes from "prop-types";

import { Container, Row } from "components/grid";
import Logo from "svg/Logo";

const Header = () => (
    <header className="header" role="header">
        <Container>
            <Row noCol className="justify-between-xs">
                <Logo />
                <ul>
                    <li>Why menurai</li>
                    <li>Documentation</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </Row>
            <button>Get Menurai</button>
        </Container>
    </header>
);

export default Header;
