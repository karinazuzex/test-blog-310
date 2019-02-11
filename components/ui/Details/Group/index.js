import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Item from "../Item";

class DetailsGroup extends Component {
    constructor(props) {
        super(props);

        this.details = {};
    }

    handleItemOpen = (itemKey) => {
        Object.keys(this.details).map(key => key !== itemKey && this.details[key].reset());
    };

    renderData = () => {
        const { data } = this.props;
        return data.map((item, index) => {
            const key = `${index}__${item.summary.split(" ").join("")}`;
            return (
                <Item
                    summary={item.summary}
                    info={item.info}
                    ref={(ref) => { this.details[key] = ref }}
                    key={key}
                    uuid={key}
                    onOpen={this.handleItemOpen}
                />
            );
        });
    };

    render() {
        return (
            <Fragment>
                { this.renderData() }
            </Fragment>
        );
    }
}

DetailsGroup.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            summary: PropTypes.string.isRequired,
            info: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default DetailsGroup;
