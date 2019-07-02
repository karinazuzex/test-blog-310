import React, { Component } from "react";
import PropTypes from "prop-types";
import ReCaptcha from "react-google-recaptcha";

import { consts } from "config";

class ReCaptchaWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
            loaded: null,
        };

        this.recaptcha = React.createRef();
    }

    // TODO: add timeout for execute fail
    execute = () => this.recaptcha.current.execute();
    reset = () => this.recaptcha.current.reset();

    asyncScriptOnLoad = () => {
        this.setState({ loaded: true });
        const { onLoad } = this.props;
        if (onLoad) {
            onLoad();
        }
    };

    onChange = (value) => {
        this.setState({ value });
        const { onChange } = this.props;
        if (onChange) {
            onChange(value);
        }
    };

    render() {
        return (
            <ReCaptcha
                ref={this.recaptcha}
                size="invisible"
                sitekey={consts.RECAPTCHA_SITE_KEY}
                onChange={this.onChange}
                asyncScriptOnLoad={this.asyncScriptOnLoad}
            />
        );
    }
}

ReCaptchaWrapper.propTypes = {
    onLoad: PropTypes.func,
    onChange: PropTypes.func,
};

export default ReCaptchaWrapper;
