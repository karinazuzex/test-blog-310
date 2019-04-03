import React from "react";

import { Row } from "components/grid/index";

const ComparsionTable = () => (
    <div className="table__wrapper">
        <div className="table table--comparsion">
            <Row theme="no-col" className="table__row table__row--header">
                <div className="col-xs-3 table__col">
                    Comparsion
                </div>
                <div className="col-xs-3 table__col">
                    <label className="label label__solid label__solid--red">
                        Memurai for Windows
                    </label>
                </div>
                <div className="col-xs-3 table__col">
                    <label className="label label__solid label__solid--grey-light">
                        Redis (Linux) inside docker
                    </label>
                </div>
                <div className="col-xs-3 table__col">
                    <label className="label label__solid label__solid--grey-light">
                        Redis (Linux) inside WSL
                    </label>
                </div>
            </Row>
            <Row theme="no-col" className="table__row">
                <div className="col-xs-3 table__col">
                    Production-ready?
                </div>
                <div className="col-xs-3 table__col">
                    <div className="icon icon--checked" />
                </div>
                <div className="col-xs-3 table__col">
                    <div className="icon icon--unchecked" />
                </div>
                <div className="col-xs-3 table__col">
                    <div className="icon icon--unchecked" />
                </div>
            </Row>
            <Row theme="no-col" className="table__row">
                <div className="col-xs-3 table__col">
                    Performance environment
                </div>
                <div className="col-xs-3 table__col">
                    Native
                </div>
                <div className="col-xs-3 table__col">
                    Virtualization
                </div>
                <div className="col-xs-3 table__col">
                    Emulation
                </div>
            </Row>
            <Row theme="no-col" className="table__row">
                <div className="col-xs-3 table__col">
                    Feature X available?
                </div>
                <div className="col-xs-3 table__col">
                    <div className="icon icon--checked" />
                </div>
                <div className="col-xs-3 table__col">
                    <div className="icon icon--unchecked" />
                </div>
                <div className="col-xs-3 table__col">
                    <div className="icon icon--unchecked" />
                </div>
            </Row>
            <Row theme="no-col" className="table__row">
                <div className="col-xs-3 table__col">
                    Performance score
                </div>
                <div className="col-xs-3 table__col">
                    99.97
                </div>
                <div className="col-xs-3 table__col">
                    63.8
                </div>
                <div className="col-xs-3 table__col">
                    42.5
                </div>
            </Row>
        </div>
    </div>
);

export default ComparsionTable;
