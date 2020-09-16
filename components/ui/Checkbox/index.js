import { Component } from "react";
import PropTypes from "prop-types";

class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
        };
    }

    getValue = () => this.state.checked;

    handleChange = () => {
        const { onChange, name } = this.props;
        const checked = !this.state.checked;
        this.setState({
            checked,
        });

        if (onChange && typeof onChange === "function") {
            onChange(checked, name);
        }
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
                    onClick={this.handleChange}
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
    onChange: PropTypes.func,
};

export default Checkbox;
