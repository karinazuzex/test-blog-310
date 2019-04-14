import React from "react";

import { Container } from "components/grid";
import Social from "components/Social";

const PromoSection = () => (
    <section className="section section__social section__social--about bg-white-grey separator-bt">
        <Container>
            <div className="block text-center">
                <div className="block__pretitle block__elem--xs">
                    SOCIAL
                </div>
                <h3 className="block__title block__elem--lg">
                    Follow Memurai
                </h3>
                <Social theme="transparent" />
            </div>
        </Container>
    </section>
);

export default PromoSection;
