import React, { Component } from "react";
import PropTypes from "prop-types";

class DetailsItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: props.defaultState || false,
        };
    }

    reset = () => {
        this.setState({
            active: false,
        });
    };

    handleCollapse = () => {
        const { uuid, onOpen } = this.props;
        if (!this.state.active && uuid && onOpen) {
            onOpen(uuid);
        }
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

DetailsItem.propTypes = {
    defaultState: PropTypes.bool,
    summary: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    uuid: PropTypes.string,
    onOpen: PropTypes.func,
};

export default DetailsItem;
