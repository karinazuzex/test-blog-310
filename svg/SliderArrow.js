import React from "react";
import PropTypes from "prop-types";

const SliderArrow = ({ className = "" }) => (
    <svg className={`image image__slider-arrow ${className}`} width="12px" height="18px" viewBox="0 0 12 18">
        <defs />
        <g id="Mobile" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="red" transform="translate(-163.000000, -1156.000000)" fill="#FFFFFF">
                <g id="Group-14" transform="translate(138.000000, 1133.000000)">
                    <g id="arrow" transform="translate(30.500000, 32.000000) scale(-1, 1) rotate(-90.000000) translate(-30.500000, -32.000000) translate(22.000000, 26.000000)">
                        <polygon id="Fill-1" points="0 2.39310725 0 2.39507826 8.00038889 10.7423246 10.2632778 8.38104928 2.26288889 0.0318318841" />
                        <polygon id="Fill-2" points="14.54435 9.85507246e-05 6.14351667 8.76618551 8.40735 11.1264754 16.8072389 2.36235942 16.8072389 2.36038841" />
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

SliderArrow.propTypes = {
    className: PropTypes.string,
};

export default SliderArrow;
