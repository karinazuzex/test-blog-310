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
  const scroll = () => {
    const id = document.location.hash.replace("#", "");
    if (id) {
      document.getElementById(id).scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center"
      });
    }
  };
  useEffect(() => {
    ReactTooltip.rebuild();
    window.addEventListener("hashchange", scroll());
    return () => {
      window.removeEventListener("hashchange", scroll());
    };
  });

  const copyLink = id => e => {
    ReactTooltip.hide(document.getElementById('link-' + id));
    setTimeout(()=>{
        setBlock(id);
        copy(document.location.origin + "/faq#" + id);
        ReactTooltip.show(document.getElementById('link-' + id));
    }, 50);
    
  };

  const renderFAQ = () =>
   
    faq.map((item, index) => (
      <div
        id={index}
        key={helpers.getUID()}
        className="block__elem--xl text-left"
      >
        <Link
          rel="noreferrer noopener"
          id={'link-' + index}
          target="_blank"
          className="social__item social__item--link"
          onClick={copyLink(index)}
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
              <NextLink href={routes.CONTACT_PAGE.path} passHref prefetch>
                <Button
                  className="block__elem"
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
          place="bottom"
          type="dark"
          effect="solid"
          className="tooltip tooltip--dark tooltip--link"
        />
        <ReactTooltip
          id="tooltip-copied"
          place="bottom"
          type="success"
          effect="solid"
          className="tooltip tooltip--success tooltip--link"
        />
      </Container>
    </section>
  );
};

export default FAQSection;
