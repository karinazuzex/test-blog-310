import React from "react";
import NextLink from "next/link";

import { routes, consts } from "config";
import GetMemuraiTable from "components/Table/GetMemurai";
import { Container, Row } from "components/grid";
import { Button } from "components/ui";
import { Link } from "components/ui";

const PromoSection = () => (
    <section className="section section__get-memurai">
        <Container>
            <div className="block text-center">
                <h3 className="block__title block__elem--lg">
                    Get Memurai<br />
                </h3>
                <GetMemuraiTable/>
                <p className="block__postfix block__postfix--promo-home">
                    <span className="overtext">*</span> Memurai Developer Edition has certain usage restrictions such as a restart is requires after 10 days. 
                    The Memurai Team reserves the right to change and modify those restrictions at any <br/>time for the free Developer Edition.
                </p>
            </div>
        </Container>
    </section>
);

export default PromoSection;
