import { Fragment } from "react";

import Header from "components/Header";

const Layout = (props) => (
    <Fragment>
        <Header />
        {props.children}
    </Fragment>
);

export default Layout;
