import React from "react";

import { Row } from "components/grid";
import Button from "components/ui/Button";
import Checkbox from "components/ui/Checkbox";

const SubscribeForm = () => (
    <form className="form form--contact">
        <Row className="form__row">
            <div className="form__group">
                <label className="form__group-label" htmlFor="name-contact">Full name</label>
                <input type="text" className="input" id="name-contact" />
            </div>
            <div className="form__group">
                <label className="form__group-label" htmlFor="email-contact">Email address</label>
                <input type="email" className="input" id="email-contact" />
            </div>
        </Row>
        <Row className="form__row">
            <div className="form__group">
                <label className="form__group-label" htmlFor="subject-contact">Subject</label>
                <input type="text" className="input" id="subject-contact" />
            </div>
        </Row>
        <Row className="form__row align-end-xs">
            <div className="form__group">
                <label className="form__group-label" htmlFor="message-contact">Message</label>
                <textarea className="textarea" id="message-contact" />
            </div>
        </Row>
        <Row className="form__row align-center-xs justify-between-xs">
            <div className="form__group">
                <Checkbox />
            </div>
            <div className="form__group form__group--no-grow">
                <Button role="submit" className="form__group-button" type="solid" theme="red-white">Submit</Button>
            </div>
        </Row>
    </form>
);

export default SubscribeForm;
