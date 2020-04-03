import React from "react";
import PropTypes from "prop-types";

const NewsletterLogo = ({ className = "" }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="64.000000pt"
    height="42.000000pt"
    viewBox="0 0 64.000000 42.000000"
    preserveAspectRatio="xMidYMid meet"
    className={`image image__twitter-logo ${className}`}
  >
    <metadata>
      Created by potrace 1.15, written by Peter Selinger 2001-2017
    </metadata>
    <g
      transform="translate(0.000000,42.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M31 413 c0 -5 60 -60 133 -123 85 -73 142 -115 156 -115 14 0 71 42
   156 115 73 63 133 118 133 123 1 4 -129 7 -289 7 -160 0 -290 -3 -289 -7z"
      />
      <path
        d="M0 205 c0 -97 4 -175 9 -173 13 5 195 177 190 181 -2 1 -40 34 -84
   73 -44 38 -88 76 -97 83 -17 13 -18 3 -18 -164z"
      />
      <path
        d="M538 298 c-53 -45 -96 -86 -95 -89 4 -12 188 -182 193 -177 2 3 3 83
   2 177 l-3 173 -97 -84z"
      />
      <path
        d="M130 90 l-95 -89 283 -1 c155 0 282 2 282 4 0 2 -43 43 -95 91 l-95
   87 -31 -26 c-38 -33 -73 -33 -115 -1 -18 14 -34 25 -36 25 -2 -1 -46 -41 -98
   -90z"
      />
    </g>
  </svg>
);

NewsletterLogo.propTypes = {
  className: PropTypes.string
};

export default NewsletterLogo;
