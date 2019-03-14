import React from "react";

import { Container } from "components/grid/index";
import SubscribeForm from "components/Form/Subscribe/index";

const SubscribeSection = () => (
    <section className="section section__subscribe bg-white-grey">
        <Container>
            <div className="block text-center">
                <div className="block__pretitle block__elem">LATEST NEWS</div>
                <h3 className="block__title block__elem--lg">
                    <span className="text-bold">Stay informed.</span><br />
                    Our newsletter is sent weekly
                </h3>
                <SubscribeForm />
            </div>
        </Container>
    </section>
);

export default SubscribeSection;
