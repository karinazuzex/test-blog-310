import React from "react";

import { Container, Row } from "components/grid/index";
import ComparsionTable from "components/ui/Table/Comparsion";

const PromoSection = () => (
    <section className="section section__comparsion bg-white-grey separator-bt">
        <Container>
            <div className="block text-center">
                <div className="block__pretitle block__elem--xs">
                    COMPARSION
                </div>
                <h3 className="block__title block__elem--xl">
                    Redis-compatible server on Windows<br />
                    <span className="text-normal">Options compared</span>
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
