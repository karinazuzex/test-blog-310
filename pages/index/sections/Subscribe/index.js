import React from "react";

import { Container } from "components/grid";
import SubscribeForm from "components/Form/Subscribe";

const SubscribeSection = () => (
    <section className="section section__subscribe section__subscribe--home bg-white-grey">
        <Container>
            <div className="block text-center">
                <div className="block__pretitle block__elem">LATEST NEWS</div>
                <h3 className="block__title block__elem--lg">
                    Stay informed.<br />
                    Our newsletter is sent weekly
                </h3>
                <SubscribeForm />
            </div>
        </Container>
    </section>
);

export default SubscribeSection;
