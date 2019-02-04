import React from "react";
import PropTypes from "prop-types";

const TwitterLogo = ({ className = "" }) => (
    <svg className={`image image__twitter-logo ${className}`} width="24px" height="20px" viewBox="0 0 24 20">
        <defs />
        <g id="Mobile" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="red" transform="translate(-616.000000, -3056.000000)" fill="#080606">
                <g id="Group-7" transform="translate(0.000000, 2972.000000)">
                    <g id="Group-12" transform="translate(603.000000, 70.000000)">
                        <g id="twitter">
                            <path d="M36.3885714,17.0559341 C35.5471628,17.428582 34.6442083,17.6806673 33.6957267,17.7944851 C34.6627564,17.2135928 35.406366,16.2946195 35.7570934,15.1994393 C34.8507665,15.7373338 33.8466406,16.1276867 32.7792826,16.3376173 C31.9235414,15.4262318 30.7052694,14.8571429 29.3563178,14.8571429 C26.7663306,14.8571429 24.6670246,16.9564489 24.6670246,19.5464361 C24.6670246,19.9140254 24.7083362,20.2714976 24.7884302,20.6146372 C20.890803,20.4190392 17.4358005,18.5524273 15.1223484,15.7154134 C14.7193491,16.4075942 14.4874981,17.2127497 14.4874981,18.0727064 C14.4874981,19.6998793 15.3154171,21.1348267 16.5733146,21.9753922 C15.8052552,21.9517855 15.082723,21.7410118 14.4504019,21.3894413 C14.4495588,21.4088325 14.4495588,21.4290667 14.4495588,21.4484579 C14.4495588,23.7205984 16.0657715,25.6158755 18.2106047,26.0466969 C17.8177225,26.1529269 17.4029198,26.2111004 16.9754708,26.2111004 C16.6736429,26.2111004 16.3802459,26.1815921 16.0935936,26.1267909 C16.6905048,27.9891873 18.4213784,29.3457268 20.4743142,29.3836661 C18.8690617,30.6415635 16.8473204,31.3902317 14.6502154,31.3902317 C14.2716658,31.3902317 13.8981748,31.3683112 13.5314286,31.3253134 C15.6071279,32.655717 18.071494,33.4322073 20.7196548,33.4322073 C29.3445145,33.4322073 34.0616298,26.2869789 34.0616298,20.0902322 C34.0616298,19.8862033 34.0574143,19.6847036 34.0489834,19.483204 C34.9645843,18.8222177 35.7596227,17.9959848 36.3885714,17.0559341" id="Fill-1" />
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

TwitterLogo.propTypes = {
    className: PropTypes.string,
};

export default TwitterLogo;
