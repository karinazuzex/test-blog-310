import React, { Fragment } from "react";
import { reviews } from "content";
import { Container } from "components/grid";
import { Stars } from "components/ui";

import UserPromo from "components/User/Promo";

const ReviewsSection = () =>
  reviews && reviews.length ? (
    <section className="section section__reviews bg-white-grey separator-bt">
      <Container>
        <div className="block text-center">
          <Stars amount={5} className="block__elem" />
          <h3 className="block__title block__elem--lg">
            The reviews are in.
            <br />
            <span className="text-normal">People love Memurai</span>
          </h3>
        </div>
        {/* <div className="swiper-container">
            <div className="swiper-wrapper">
              {reviews.map(
                ({ id, text, link, image, logo, name, position }) => (
                  <div className="swiper-slide" key={id}>
                    <Fragment>
                      <section className="section section__review-short">
                        <Container>
                          <div className="block text-center">
                            <p className="block__elem text-light">
                              &quot;{text}&quot;
                            </p>
                          </div>
                          <UserPromo
                            name={name}
                            position={position}
                            imagePath={image}
                            logoPath={logo}
                            link={link}
                          />
                        </Container>
                      </section>
                    </Fragment>
                  </div>
                )
              )}
            </div>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div> */}
      </Container>
    </section>
  ) : null;

export default ReviewsSection;
