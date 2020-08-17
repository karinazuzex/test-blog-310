import PropTypes from "prop-types";

const Close = ({ className = "close" }) => (
<svg className={`image ${className}`} version="1.1" id="Capa_1" width="18px" height="18px" viewBox="0 0 18 18">
    <g id="Site-Final" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Share-Link-Selected" transform="translate(-372.000000, -625.000000)" fill="#FFFFFF">
            <g id="icon" transform="translate(356.000000, 609.000000)">
                <g id="Group-Copy-3" transform="translate(15.000000, 15.000000)">
                    <rect id="Rectangle-3" transform="translate(9.000000, 8.947619) scale(-1, 1) rotate(-315.000000) translate(-9.000000, -8.947619) " x="-1.46153846" y="7.57142857" width="20.923076" height="2.75238083" rx="1.37619042"></rect>
                    <rect id="Rectangle-3-Copy" transform="translate(9.000000, 8.947619) rotate(-315.000000) translate(-9.000000, -8.947619) " x="-1.46153846" y="7.57142857" width="20.923076" height="2.75238083" rx="1.37619042"></rect>
                </g>
            </g>
        </g>
    </g>
</svg>

);

Close.propTypes = {
    className: PropTypes.string,
};

export default Close;