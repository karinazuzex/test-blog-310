import { Component } from "react";
import PropTypes from "prop-types";

import TagProvider from "components/TagProvider";
import { Arrow } from "svg";
import Loader from "../Loader/Loader";

/**
 * Get button's classes
 * @param {string} item String item button
 * @param {string} type String type button
 * @return {string}
 */
function getButtonClasses(item, type) {
    return `button${type && `__${type}`}--${item} ${type ? `button--${item}` : ""}`;
}

class Button extends Component {
    render() {
        const { className = "", loading = false, theme = "", type = "", as, children, ...rest } = this.props;
        const themeExpanded = theme.split(" ").map(item => getButtonClasses(item, type)).join(" ");

        return (
            <TagProvider
                {...rest}
                defaultTag="button"
                as={as}
                className={`button ${className || ""} ${type && `button__${type}`} ${themeExpanded}`}
            >
                {children}
                {loading && <Loader />}
                {theme.includes("chevron") &&
                <Arrow className={`button__chevron`} />
                }
            </TagProvider>
        );
    }
}

Button.propTypes = {
    className: PropTypes.string,
    loading: PropTypes.bool,
    theme: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string,
    ]),
    as: PropTypes.string,
};

export default Button;
