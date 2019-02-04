import React from "react";

import { Container } from "components/grid/index";

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
            </div>
        </Container>
    </section>
);

export default PromoSection;
