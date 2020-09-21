import React from "react";

import { Row } from "components/grid";

const ComparisonTable = ({ blackHeader }) => (
  <div className="table__wrapper">
    <div className="table table--comparison">
      <Row theme="no-col" className="table__row table__row--header">
        <div className="col-xs-3 table__col">Comparison</div>
        <div className="col-xs-3 table__col">
          <label className={`label label__solid label__solid--${blackHeader ? 'black' : 'red'}`}>
            Memurai&nbsp;
            <br className="br-mobile" />
            for&nbsp;
            <br className="br-tablet" />
            Windows
          </label>
        </div>
        <div className="col-xs-3 table__col">
          <label className="label label__solid label__solid--grey-light">
            Redis
            <br className="br-mobile" />
            (Linux)&nbsp;
            <br className="br-tablet" />
            inside Docker
          </label>
        </div>
        <div className="col-xs-3 table__col">
          <label className="label label__solid label__solid--grey-light">
            Redis
            <br className="br-mobile" />
            (Linux) on&nbsp;
            <br className="br-tablet" />
            WSL / WSL2
          </label>
        </div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-3 table__col">System environment</div>
        <div className="col-xs-3 table__col">Native</div>
        <div className="col-xs-3 table__col">Virtualization</div>
        <div className="col-xs-3 table__col">Emulation / Virtualization</div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-3 table__col">Suitable for production use?</div>
        <div className="col-xs-3 table__col">
          <div className="icon icon--checked" />
        </div>
        <div className="col-xs-3 table__col">
          <div className="icon icon--checked" />
        </div>
        <div className="col-xs-3 table__col">
          <div className="icon icon--unchecked" />
        </div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-3 table__col">
          Designed and optimized for Windows?
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
        <div className="col-xs-3 table__col">Easy setup experience?</div>
        <div className="col-xs-3 table__col">
          <div className="icon icon--checked" />
        </div>
        <div className="col-xs-3 table__col">
          <div className="icon icon--unchecked" />
        </div>
        <div className="col-xs-3 table__col">
          <div className="icon icon--checked" />
        </div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-3 table__col">
          Runs on all versions of Windows?
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
        <div className="col-xs-3 table__col">Uncompromised performance?</div>
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
    </div>
  </div>
);

export default ComparisonTable;
