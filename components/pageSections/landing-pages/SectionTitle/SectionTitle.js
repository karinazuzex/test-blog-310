import PropTypes from "prop-types";
import { Container } from "../../../grid";
import { Button } from './../../../ui';
import { replaceBreakLineToBrTag } from '../../../../utils/helpers';

function SectionTitle({ title = '', description = '', btnText = '' }) {
  return (
    <section className="section section__promo section__promo--home bg-black">
      <Container>
        <div className="block text-center text-white">
          <h1 className="block__title block__elem--lg text-normal">
            {title}
          </h1>
          {description && (
            <p className="block__description">
              {replaceBreakLineToBrTag(description)}
            </p>
          )}
          <div className="button__wrapper">
            <Button
              as="scroll"
              to="talk-to-expert"
              smooth="easeOutQuad"
              duration={400}
              offset={-60}
              type="solid"
              theme="red-white"
            >
              {btnText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  btnText: PropTypes.string,
};

export default SectionTitle;
