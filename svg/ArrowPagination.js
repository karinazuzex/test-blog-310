import React from "react";
import PropTypes from "prop-types";

const ArrowPagination = ({ className = "" }) => (

<svg className={`image image__arrow ${className}`} version="1.1" id="Capa_1"
width="306px" height="306px" viewBox="0 0 306 306">
    <g>
        <g id="chevron-right">
            <polygon points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153"/>
        </g>
    </g>
</svg>
);

ArrowPagination.propTypes = {
    className: PropTypes.string,
};

export default ArrowPagination;
