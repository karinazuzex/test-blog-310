import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";
import { Link } from "components/ui";

import { Row, Column } from "components/grid";

const UserPromo = ({
  name = "Mayra Alme",
  position = "Lead Engeneer",
  imagePath,
  logoPath,
  link,
}) => (
  <Row theme="no-col" className="user-promo justify-center-xs align-center-xs">
    <Row className="col-xs-12 col-sm-6 col-lg-4 justify-center-xs">
      {imagePath ? (
        <Fragment>
          <img
            src={imagePath}
            className="user-promo__icon"
            alt="Customer photo"
          />
        </Fragment>
      ) : (
        <Fragment>
          <div className="user-promo__icon"></div>
        </Fragment>
      )}
      <Column className="justify-center-xs user-promo__info">
        <div className="user-promo__info-name">{name}</div>
        <div className="user-promo__info-position">{position}</div>
      </Column>
    </Row>

    <Row className="col-xs-12 col-sm-6 col-lg-4 justify-center-xs">
      {logoPath ? (
        <Fragment>
          <NextLink href={link} passHref prefetch>
            <Link theme="grey-light" className="f-menu__link">
              <img
                src={logoPath}
                alt="Company logo"
                className="user-promo__company"
              />
            </Link>
          </NextLink>
        </Fragment>
      ) : (
        <div className="user-promo__company">StepUp</div>
      )}
    </Row>
  </Row>
);

UserPromo.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  imagePath: PropTypes.string,
  logoPath: PropTypes.string,
  link: PropTypes.string,
};
export default UserPromo;
