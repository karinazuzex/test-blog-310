import React from "react";
import PropTypes from "prop-types";

const Arrow = ({ className = "" }) => (
    <svg className={`image image__arrow ${className}`} width="15px" height="13px" viewBox="0 0 15 13">
        <defs />
        <g id="Mobile" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="red" transform="translate(-954.000000, -545.000000)" fill="#FFFFFF">
                <g id="Group-11" transform="translate(447.000000, 517.000000)">
                    <g id="Group" transform="translate(307.000000, 0.000000)">
                        <path d="M214.751577,34.8165086 L209.451893,40.1251674 C208.600158,40.9783447 206.80205,39.2245913 207.701104,38.3240153 L210.634858,35.4326922 L201.02918,35.4326922 C199.65694,35.4326922 199.65694,32.920559 201.02918,32.920559 L210.634858,32.920559 L207.701104,29.9818371 C206.80205,29.1286598 208.600158,27.3749065 209.451893,28.2280838 L214.751577,33.5367426 C215.082808,33.8685338 215.082808,34.4373186 214.751577,34.8165086" id="Fill-1" />
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
