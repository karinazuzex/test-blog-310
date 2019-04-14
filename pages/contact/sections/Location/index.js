import React from "react";

import { Container } from "components/grid";
import { Icon } from "components/ui";

import CityImage from "static/images/city.png";

const PromoSection = () => (
    <section className="section section__location section__location--contact bg-white-grey">
        <Container>
            <div className="block text-center">
                <div className="block__pretitle block__elem--xs">
                    Location
                </div>
                <h3 className="block__title block__elem">
                    Our office
                </h3>
                <p className="block__description block__elem--lg">
                    Memurai Inc.<br />
                    113 Cherry Street #11630<br />
                    Seattle, WA 98104
                </p>
                <Icon className="block__image self-center" type="big-circled" theme="city">
                    <img src={CityImage} alt="City" />
                </Icon>
            </div>
        </Container>
    </section>
);

export default PromoSection;
