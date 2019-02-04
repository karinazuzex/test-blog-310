import React from "react";

import { Row } from "components/grid";
import Button from "components/ui/Button";

const SubscribeForm = () => (
    <Row className="form form--subscribe align-end-xs" theme="no-col">
        <div className="form__group">
            <label className="form__group-label" htmlFor="name-subscribe">Full name</label>
            <input type="text" className="input" id="name-subscribe" />
        </div>
        <div className="form__group">
            <label className="form__group-label" htmlFor="email-subscribe">Email address</label>
            <input type="email" className="input" id="email-subscribe" />
        </div>
        <div className="form__group form__group--no-grow">
            <Button role="submit" className="form__group-button" type="solid" theme="red-white">Susbcribe</Button>
        </div>
    </Row>
);

export default SubscribeForm;
