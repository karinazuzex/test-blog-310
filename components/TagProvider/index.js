import React from "react";
import PropTypes from "prop-types";
import ScrollLink from "react-scroll/modules/components/Link";

const TagProvider = ({ defaultTag, as = null, children, ...rest }) => {
    const Tag = as || defaultTag;

    return (
        Tag === "scroll"
            ? (
                <ScrollLink {...rest}>
                    {children}
                </ScrollLink>
            )
            : (
                <Tag {...rest}>
                    {children}
                </Tag>
            )
    );
};

TagProvider.propTypes = {
    defaultTag: PropTypes.string.isRequired,
    as: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.string,
    ]),
};

export default TagProvider;
