import React from "react";

import { Container } from "components/grid";
import Stars from "components/ui/Stars";

const ReviewsSection = () => (
    <section className="section section__reviews section__reviews--home bg-white-grey separator-bt">
        <Container>
            <div className="block text-center">
                <Stars amount={5} className="block__elem" />
                <h3 className="block__title block__elem--lg">
                    The reviews are in.<br />
                    People love Memurai
                </h3>
            </div>
        </Container>
    </section>
);

export default ReviewsSection;
