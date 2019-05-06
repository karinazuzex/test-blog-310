import React from "react";
import PropTypes from "prop-types";

const NewsletterLogo = ({ className = "" }) => (
    <svg className={`image image__mailer-logo ${className}`} width="32px" height="32px" viewBox="0 0 32 32">
        <defs />
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path d="M28,5.5H4c-2.209,0-4,1.792-4,4v13c0,2.209,1.791,4,4,4h24c2.209,0,4-1.791,4-4v-13
                C32,7.292,30.209,5.5,28,5.5z M2,10.75L8.999,16L2,21.25V10.75z M30,22.5c0,1.104-0.898,2-2,2H4c-1.103,0-2-0.896-2-2l7.832-5.875
                l4.368,3.277c0.533,0.398,1.166,0.6,1.8,0.6c0.633,0,1.266-0.201,1.799-0.6l4.369-3.277L30,22.5L30,22.5z M30,21.25L23,16l7-5.25
                V21.25z M17.199,19.102c-0.349,0.262-0.763,0.4-1.199,0.4s-0.851-0.139-1.2-0.4L10.665,16l-0.833-0.625L2,9.501V9.5
                c0-1.103,0.897-2,2-2h24c1.102,0,2,0.897,2,2L17.199,19.102z"
            />
        </g>
    </svg>
);

NewsletterLogo.propTypes = {
    className: PropTypes.string,
};

export default NewsletterLogo;
