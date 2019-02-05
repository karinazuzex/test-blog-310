import React, { Component } from "react";
import PropTypes from "prop-types";

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        };
    }

    handleCollapse = () => {
        this.setState({
            active: !this.state.active,
        });
    };

    render () {
        const { summary, info } = this.props;
        return (
            <div className={`details ${this.state.active ? "active" : ""}`}>
                <div className="details__summary" onClick={this.handleCollapse}>
                    {summary}
                </div>
                <div className="details__info">
                    <p className="details__info-text">
                        {info}
                    </p>
                </div>
            </div>
        );
    }
}

Details.propTypes = {
    summary: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
};

export default Details;
