import React from "react";
import Swiper from "swiper";
import NextLink from "next/link";

import { reviews } from "content";

import { Container } from "components/grid";
import { Stars } from "components/ui";
import { Link } from "components/ui";
import { Icon } from "components/ui";

import SupportImage from "static/images/support.png";

const ReviewsSection = () => {
  const swiper = new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  return reviews && reviews.length ? (
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
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {reviews.map(({ id, text, link, image, logo, name, title }) => (
              <div className="swiper-slide">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ width: "75%" }}>
                    <span key={id} style={{ textAlign: "center" }}>
                      {text}
                      <br />
                    </span>
                  </div>
                  <div
                    style={{
                      paddingTop: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "40%",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Icon
                        type="big-circled mod-small"
                        theme="support"
                        className="info__image info__block"
                      >
                        <img src={image} alt="Customer photo" />
                      </Icon>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          margin: "0 30px 0 10px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "500",
                            fontSize: "18px",
                            lineHeight: "1.5em",
                          }}
                        >
                          {name}
                        </span>
                        <span
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            color: "grey",
                            lineHeight: "1em",
                          }}
                        >
                          {title}
                        </span>
                      </div>
                    </div>
                    <br />
                    <NextLink href={link} passHref prefetch>
                      <Link theme="grey-light" className="f-menu__link">
                        <img
                          src={logo}
                          alt="Company logo"
                          style={{ width: "150px" }}
                        />
                      </Link>
                    </NextLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <!-- Add Arrows --> */}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </Container>
    </section>
  ) : null;
};

export default ReviewsSection;
