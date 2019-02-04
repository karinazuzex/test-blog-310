import React from "react";
import PropTypes from "prop-types";

const FacebookLogo = ({ className = "" }) => (
    <svg className={`image image__github-logo ${className}`} width="13px" height="26px" viewBox="0 0 13 26">
        <defs />
        <g id="Mobile" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="red" transform="translate(-812.000000, -3053.000000)" fill="#080606">
                <g id="Group-7" transform="translate(0.000000, 2972.000000)">
                    <g id="Group-12" transform="translate(603.000000, 70.000000)">
                        <g id="facebook" transform="translate(192.000000, 0.000000)">
                            <path d="M20.25,19.6666667 L17,19.6666667 L17,24 L20.25,24 L20.25,37 L25.6666667,37 L25.6666667,24 L29.6121667,24 L30,19.6666667 L25.6666667,19.6666667 L25.6666667,17.86075 C25.6666667,16.8261667 25.8746667,16.4166667 26.8745833,16.4166667 L30,16.4166667 L30,11 L25.8746667,11 C21.979,11 20.25,12.7149167 20.25,15.9995833 L20.25,19.6666667 Z" id="Fill-1" />
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

FacebookLogo.propTypes = {
    className: PropTypes.string,
};

export default FacebookLogo;
