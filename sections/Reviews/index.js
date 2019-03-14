import React from "react";

import { Container } from "components/grid/index";
import Stars from "components/ui/Stars/index";

const ReviewsSection = () => (
    <section className="section section__reviews bg-white-grey separator-bt">
        <Container>
            <div className="block text-center">
                <Stars amount={5} className="block__elem" />
                <h3 className="block__title block__elem--lg">
                    The reviews are in.<br />
                    <span className="text-normal">People love Memurai</span>
                </h3>
            </div>
        </Container>
    </section>
);

export default ReviewsSection;
