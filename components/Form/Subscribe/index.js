import React from "react";

import { Row } from "components/grid";
import Button from "components/ui/Button";

const SubscribeForm = () => (
    <form className="form form--subscribe">
        <Row className="form__row align-end-xs">
            <div className="form__group">
                <label className="form__group-label" htmlFor="name-subscribe">Full name</label>
                <input type="text" className="input" id="name-subscribe" />
            </div>
            <div className="form__group">
                <label className="form__group-label" htmlFor="email-subscribe">Email address</label>
                <input type="email" className="input" id="email-subscribe" />
            </div>
            <div className="form__group form__group--no-grow form__group--lg">
                <Button role="submit" className="form__group-button" type="solid" theme="red-white">Susbcribe</Button>
            </div>
        </Row>
    </form>
);

export default SubscribeForm;
