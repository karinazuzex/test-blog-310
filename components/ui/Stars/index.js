import React from "react";
import PropTypes from "prop-types";

import { Row } from "components/grid";
import { Star } from "svg";

const Stars = ({ className = "", amount = 1 }) => {
    let content = [];
    for (let count = 0; count < amount; count += 1) {
        content.push(
            <div key={count} className="stars__item">
                <Star />
            </div>
        );
    }
    return (
        <Row className={`stars justify-center-xs ${className}`}>
            {content}
        </Row>
    );
};

Stars.propTypes = {
    className: PropTypes.string,
    amount: PropTypes.number,
};

export default Stars;
