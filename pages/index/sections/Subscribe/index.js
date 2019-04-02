import React from "react";

import { Container } from "components/grid/index";
import SubscribeForm from "components/Form/Subscribe/index";

const SubscribeSection = () => (
    <section className="section section__subscribe section__subscribe--home bg-white-grey">
        <Container>
            <div className="block text-center">
                <div className="block__pretitle block__elem--xs">LATEST NEWS</div>
                <h3 className="block__title block__elem--lg">
                    Stay informed.<br />
                    <span className="text-normal">Subscribe to our newsletter</span>
                </h3>
                <SubscribeForm />
            </div>
        </Container>
    </section>
);

export default SubscribeSection;
