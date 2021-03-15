import React from "react";
import PropTypes from "prop-types";

const Arrow = ({ className = "" }) => (
    <svg className={`image image__arrow ${className}`} width="8px" height="8px" viewBox="0 0 8 8">
        <defs />
        <g id="Mobile" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Why-Memurai-v3" transform="translate(-1164.000000, -3484.000000)" fill="#FFFFFF">
                <g id="Group-2" transform="translate(1158.000000, 3478.000000)">
                    <g id="Button/Close" transform="translate(5.000000, 5.000000)">
                        <g id="Group-Copy-3">
                            <rect id="Rectangle-3" transform="translate(5.000000, 4.973809) scale(-1, 1) rotate(-315.000000) translate(-5.000000, -4.973809) " x="-0.230769231" y="4.28571429" width="10.461538" height="1.37619042" rx="0.688095208" fill="black"/>
                            <rect id="Rectangle-3-Copy" transform="translate(5.000000, 4.973809) rotate(-315.000000) translate(-5.000000, -4.973809) " x="-0.230769231" y="4.28571429" width="10.461538" height="1.37619042" rx="0.688095208" fill="black"/>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

Arrow.propTypes = {
    className: PropTypes.string,
};

export default Arrow;
