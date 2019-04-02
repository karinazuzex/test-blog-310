import React from "react";

import { Container } from "components/grid/index";
import Social from "components/Social/index";

const PromoSection = () => (
    <section className="section section__social section__social--contact">
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
