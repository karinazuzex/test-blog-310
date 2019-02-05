import React from "react";

import { Row } from "components/grid";

const ComparsionTable = () => (
    <div className="table">
        <Row theme="no-col" className="table__row table__row--header">
            <div className="table__col">
                Comparsion
            </div>
            <div className="table__col">
                <label className="label label__solid label__solid--red">
                    Memurai for Windows
                </label>
            </div>
            <div className="table__col">
                <label className="label label__solid label__solid--grey-light">
                    Redis (Linux) inside docker
                </label>
            </div>
            <div className="table__col">
                <label className="label label__solid label__solid--grey-light">
                    Redis (Linux) inside WSL
                </label>
            </div>
        </Row>
        <Row theme="no-col" className="table__row">
            <div className="table__col">
                Production-ready?
            </div>
            <div className="table__col">
                <div className="icon icon--checked" />
            </div>
            <div className="table__col">
                <div className="icon icon--unchecked" />
            </div>
            <div className="table__col">
                <div className="icon icon--unchecked" />
            </div>
        </Row>
        <Row theme="no-col" className="table__row">
            <div className="table__col">
                Performance environment
            </div>
            <div className="table__col">
                Native
            </div>
            <div className="table__col">
                Virtualization
            </div>
            <div className="table__col">
                Emulation
            </div>
        </Row>
        <Row theme="no-col" className="table__row">
            <div className="table__col">
                Feature X available?
            </div>
            <div className="table__col">
                <div className="icon icon--checked" />
            </div>
            <div className="table__col">
                <div className="icon icon--unchecked" />
            </div>
            <div className="table__col">
                <div className="icon icon--unchecked" />
            </div>
        </Row>
        <Row theme="no-col" className="table__row">
            <div className="table__col">
                Performance score
            </div>
            <div className="table__col">
                99.97
            </div>
            <div className="table__col">
                63.8
            </div>
            <div className="table__col">
                42.5
            </div>
        </Row>
    </div>
);

export default ComparsionTable;
