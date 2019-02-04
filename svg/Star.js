import React from "react";
import PropTypes from "prop-types";

const Star = ({ className = "" }) => (
    <svg className={`image image__star ${className}`} width="17px" height="16px" viewBox="0 0 17 16">
        <defs />
        <g id="Mobile" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="red" transform="translate(-661.000000, -897.000000)" fill="#4CA3D9">
                <g id="Group-4" transform="translate(661.000000, 897.000000)">
                    <polygon id="Star" points="8.68992248 12.1878968 3.5821142 15.2761435 5.0261925 9.60123485 0.425315079 5.8349676 6.42561283 5.41592785 8.68992248 0 10.9542321 5.41592785 16.9545299 5.8349676 12.3536525 9.60123485 13.7977308 15.2761435" />
                </g>
            </g>
        </g>
    </svg>
);

Star.propTypes = {
    className: PropTypes.string,
};

export default Star;
