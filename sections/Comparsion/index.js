import React from "react";

import { Container } from "components/grid/index";
import ComparsionTable from "components/ui/Table/Comparsion";

const PromoSection = () => (
    <section className="section section__comparsion bg-white-grey separator-bt">
        <Container>
            <div className="block text-center">
                <div className="block__pretitle block__elem">
                    COMPARSION
                </div>
                <h3 className="block__title block__elem--xl">
                    Redis-compatible server on Windows<br />
                    Options compared
                </h3>
                <ComparsionTable />
            </div>
        </Container>
    </section>
);

export default PromoSection;
