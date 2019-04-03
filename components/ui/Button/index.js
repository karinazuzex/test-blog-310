import React from "react";
import PropTypes from "prop-types";

import TagProvider from "components/TagProvider";
import { Arrow } from "svg";

const Button = ({ className = "", theme = "", type = "", as, children, ...rest }) => {
    const themeExpanded = theme
        .split(" ")
        .map(item => `button${type && `__${type}`}--${item} ${type ? `button--${item}` : ""}`)
        .join(" ");
    return (
        <TagProvider
            {...rest}
            defaultTag="button"
            as={as}
            className={`button ${className || ""} ${type && `button__${type}`} ${themeExpanded}`}
        >
            {children}
            {theme.includes("chevron") &&
                <Arrow className={`button__chevron`} />
            }
        </TagProvider>
    );
};

Button.propTypes = {
    className: PropTypes.string,
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
