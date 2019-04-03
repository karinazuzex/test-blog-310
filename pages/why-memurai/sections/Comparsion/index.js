import React from "react";

import { Container, Row } from "components/grid/index";
import ComparsionTable from "components/Table/Comparsion";

const PromoSection = () => (
    <section className="section section__comparsion bg-white-grey separator-bt">
        <Container>
            <div className="block text-center">
                <div className="block__pretitle block__elem--xs">
                    OPTIONS COMPARED
                </div>
                <h3 className="block__title block__elem--xl">
                    Redis-compatible servers on Windows
                </h3>
                <Container theme="reversed">
                    <Row theme="no-col" className="justify-center-xs">
                        <ComparsionTable />
                    </Row>
                </Container>
            </div>
        </Container>
    </section>
);

export default PromoSection;
