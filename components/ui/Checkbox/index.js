import React, { Component } from "react";
import PropTypes from "prop-types";

class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
        };
    }

    getValue = () => this.state.checked;

    handleCheck = () => {
        this.setState({
            checked: !this.state.checked,
        });
    };

    reset = () => {
        this.setState({
            checked: false,
        });
    };

    render() {
        const { theme, children } = this.props;
        return (
            <label className={`checkbox ${this.state.checked ? "active" : ""} ${theme ? `checkbox--${theme}` : ""}`}>
                <input
                    className="checkbox__input"
                    type="checkbox"
                    hidden
                    onClick={this.handleCheck}
                />
                {children}
            </label>
        );
    }
}

Checkbox.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string,
    ]),
    theme: PropTypes.string,
};

export default Checkbox;
