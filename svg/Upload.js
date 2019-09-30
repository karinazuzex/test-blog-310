import React from "react";
import PropTypes from "prop-types";

const Upload = ({ className = "upload" }) => (
    <svg className={`image ${className}`} fill="none" stroke="#fff" viewBox="0 0 24 24">
        <path d="M3 17v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"/>
        <polyline points="16 6 12 2 8 6"/>
        <line x1="12" x2="12" y1="2" y2="16"/>
    </svg>
);

Upload.propTypes = {
    className: PropTypes.string,
};

export default Upload;
