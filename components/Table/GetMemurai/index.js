import React from "react";

import NextLink from "next/link";
import { Button } from "components/ui";
import { Row } from "components/grid";
import { consts, routes } from "config";


const GetMemuraiTable = (props) => (
  <div className="table__wrapper">
    <div className="table table--getmemurai">
      <Row theme="no-col" className="table__row table__row--header">
        <div className="col-xs-4 table__col">
          <div className="table__block text-center">Memurai Editions</div>
        </div>
        <div className="col-xs-4 table__col">
          <div className="table__block ">
            <div className="table__block--header text-center">Developer Edition</div>
            <div className="table__block--divider"></div>
            <div className="table__block--description">
              Intended for Development and Testing.
              <br />
              Requires a restart after 10 days.
            </div>
            <div className="table__block--action">
              <NextLink passHref prefetch>
                <Button
                  as="a"
                  type="solid"
                  theme="red-white"
                  onClick={props.onClickBtn}
                >
                  Free download
                </Button>
              </NextLink>
            </div>
          </div>
        </div>
        <div className="col-xs-4 table__col justify-center-lg">
          <div className="table__block">
            <div className="table__block--header text-center">Enterprise Edition</div>
            <div className="table__block--divider"></div>
            <div className="table__block--description">
              Intended for Production use with no <br />
              restrictions or limitations.
            </div>
            <div className="table__block--action">
              <NextLink href={routes.CONTACT_PAGE.path} passHref prefetch>
                <Button as="a" type="hollow" theme="red">
                  Contact us
                </Button>
              </NextLink>
            </div>
          </div>
        </div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-4 table__col">Version</div>
        <div className="col-xs-4 table__col justify-center">{consts.MEMURAI_VERSION_SHORT}</div>
        <div className="col-xs-4 table__col justify-center">{consts.MEMURAI_VERSION_SHORT}</div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-4 table__col">LRU eviction</div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-4 table__col">Persistence</div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-4 table__col">Transactions</div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-4 table__col">LUA Scripting</div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-4 table__col">High-availability</div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-4 table__col">Pub/Sub</div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-4 table__col">Cluster</div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-4 table__col">Modules API</div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-4 table__col">
          Replicate between Memurai and Redis
        </div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-4 table__col">Support</div>
        <div className="col-xs-4 table__col">Community - Stack Overflow</div>
        <div className="col-xs-4 table__col">Premium email and web support</div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-4 table__col">Main purpose</div>
        <div className="col-xs-4 table__col">Development and testing</div>
        <div className="col-xs-4 table__col">Production use</div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-4 table__col">Restrictions</div>
        <div className="col-xs-4 table__col">
          Restart required after 10 days
        </div>
        <div className="col-xs-4 table__col">None</div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-4 table__col">
          Production use <span className="overtext">*</span>
        </div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--unchecked" />
        </div>
        <div className="col-xs-4 table__col">
          <div className="icon icon--checked" />
        </div>
      </Row>
      <Row theme="no-col" className="table__row">
        <div className="col-xs-4 table__col"></div>
        <div className="col-xs-4 table__col">
          <NextLink passHref prefetch>
            <Button
              as="a"
              type="solid"
              theme="red-white"
              onClick={props.onClickBtn}
            >
              Free download
            </Button>
          </NextLink>
        </div>
        <div className="col-xs-4 table__col">
          <NextLink href={routes.CONTACT_PAGE.path} passHref prefetch>
            <Button as="a" type="hollow" theme="red">
              Contact us
            </Button>
          </NextLink>
        </div>
      </Row>
    </div>
  </div>
);

export default GetMemuraiTable;
