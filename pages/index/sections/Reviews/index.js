import React, { Fragment } from "react";
import { reviews } from "content";
import { Container } from "components/grid";
import { Stars } from "components/ui";
import Slider from "react-slick";

import UserPromo from "components/User/Promo";

const ReviewsSection = () => {
  if (!reviews || !reviews.length) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
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
        <div className="slider-wrapper">
          <Slider {...settings}>
            {reviews.map(({ id, text, link, image, image_90x90, logo, name, position }) => (
              <div className="slider-slide" key={id}>
                <Fragment>
                  <Container>
                    <div className="block text-center">
                      <p className="block__elem text-light">
                        &quot;{text}&quot;
                      </p>
                    </div>
                    <UserPromo
                      name={name}
                      position={position}
                      imagePath={image_90x90}
                      logoPath={logo}
                      link={link}
                    />
                  </Container>
                </Fragment>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default ReviewsSection;
