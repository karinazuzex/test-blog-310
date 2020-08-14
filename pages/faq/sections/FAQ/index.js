import React from "react";
import NextLink from "next/link";

import { faq } from "content";
import { routes } from "config";
import { helpers } from "utils";
import { Link } from "components/ui";
import { Container, Row, Col } from "components/grid";
import { Button } from "components/ui";
import { LinkLogo } from "svg";
import ReactTooltip from "react-tooltip";
import { useEffect, useState } from "react";
import copy from "copy-text-to-clipboard";

const FAQSection = () => {
  const [block, setBlock] = useState("");
  const [hash, setHash] = useState("");
  const [place, setPlace] = useState("bottom");
  const [allowScroll, setAllowScroll] = useState(true);
  const scroll = (id) => {
    const block = document.getElementById(id);
    if (block) {
      window.scrollTo({
        top: block.offsetTop - 100,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  const saveHash = () => {
    if (document.location.hash !== hash) {
      setHash(document.location.hash);
      const id = document.location.hash.replace("#", "");
      if (allowScroll) {
        setTimeout(scroll(id), 2000);
      }
    }
  };
  useEffect(() => {
    if (window.innerWidth < 500 && place !== "right") {
      setPlace("right");
    }
    window.addEventListener("hashchange", saveHash);
    return () => {
      window.removeEventListener("hashchange", saveHash);
    };
  });
  useEffect(() => {
    ReactTooltip.rebuild();
    saveHash();
  });

  const copyLink = (summary, id) => (e) => {
    ReactTooltip.hide(document.getElementById("link-" + id));
    setTimeout(() => {
      setBlock(id);
      const url =
        document.location.origin +
        "/faq#" +
        summary.replace(/\s/g, "-").toLowerCase();
      copy(url);
      history.replaceState({}, "", url);
      setAllowScroll(false);
      ReactTooltip.show(document.getElementById("link-" + id));
    }, 50);
  };

  const renderFAQ = () =>
    faq.map((item, index) => (
      <div
        id={item.summary.replace(/\s/g, "-").toLowerCase()}
        key={helpers.getUID()}
        className="block__elem--xl text-left"
      >
        <Link
          rel="noreferrer noopener"
          id={"link-" + index}
          target="_blank"
          className="social__item social__item-nohover social__item--link"
          onClick={copyLink(item.summary, index)}
          data-tip={block === index ? "✔ Copied!" : "Copy link"}
          data-for={block === index ? "tooltip-copied" : "tooltip-link"}
        >
          <LinkLogo />
        </Link>
        <h5 className="block__title block__elem--xs">{item.summary}</h5>
        <div className="block__description">{item.info}</div>
      </div>
    ));
  return (
    <section className="section section__faq bg-white-grey separator-bt">
      <Container>
        <div className="block">
          <Row className="justify-center-xs">
            <Col attributes="xs-12 md-8">
              {renderFAQ()}
              <NextLink href={routes.CONTACT_PAGE.path} passHref>
                <Button
                  className="block__elem self-center--mobile"
                  type="hollow"
                  theme="red chevron"
                >
                  Ask a question
                </Button>
              </NextLink>
            </Col>
          </Row>
        </div>
        <ReactTooltip
          id="tooltip-link"
          place={place}
          type="dark"
          effect="solid"
          className="tooltip tooltip--dark tooltip--link"
        />
        <ReactTooltip
          id="tooltip-copied"
          place={place}
          type="success"
          effect="solid"
          className="tooltip tooltip--success tooltip--link"
        />
      </Container>
    </section>
  );
};

export default FAQSection;
