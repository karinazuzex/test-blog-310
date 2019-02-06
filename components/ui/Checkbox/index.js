import React, { Component } from "react";
import PropTypes from "prop-types";

class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
        };
    }

    handleCheck = () => {
        this.setState({
            checked: !this.state.checked,
        });
    };

    render() {
        const { theme } = this.props;
        return (
            <label className={`checkbox ${this.state.checked ? "active" : ""} ${theme ? `checkbox--${theme}` : ""}`}>
                <input
                    className="checkbox__input"
                    type="checkbox"
                    hidden
                    onClick={this.handleCheck}
                />
                <span>Subscribe to our weekly newsletter</span>
            </label>
        );
    }
}

Checkbox.propTypes = {
    theme: PropTypes.string,
};

export default Checkbox;
