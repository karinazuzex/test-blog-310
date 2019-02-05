import React from "react";

import { Row, Column } from "components/grid";

const UserPromo = () => (
    <Row theme="no-col" className="user-promo justify-center-xs">
        <div className="user-promo__icon"></div>
        <Column className="justify-center-xs user-promo__info">
            <div className="user-promo__info-name">Mayra Alme</div>
            <div className="user-promo__info-position">Lead Engeneer</div>
        </Column>
        <div className="user-promo__company"></div>
    </Row>
);

export default UserPromo;
