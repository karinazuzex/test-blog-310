import React from "react";

import { Container } from "components/grid/index";
import UserPromo from "components/ui/User/Promo/index";

const ReviewsSection = () => (
    <section className="section section__review-short">
        <Container>
            <div className="block text-center">
                <h4 className="block__title block__elem text-light">
                    &quot;With Memurai, we just love how it integrates with Windows which gives us a competitive
                    advantage.&quot;
                </h4>
            </div>
            <UserPromo />
        </Container>
    </section>
);

export default ReviewsSection;
