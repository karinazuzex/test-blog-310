import PropTypes from "prop-types";

import { Container } from "../../../grid";
import Social from "components/Social";

const PromoSection = ({ className = "" }) => (
  <section
    className={`section section__social section__social--contact bg-white-grey separator-bt ${className}`}
  >
    <Container>
      <div className="block text-center">
        <div className="block__pretitle block__elem--xs">SOCIAL</div>
        <h3 className="block__title block__elem--lg">Follow Memurai</h3>
        <Social theme="transparent" />
      </div>
    </Container>
  </section>
);

PromoSection.propTypes = {
  className: PropTypes.string,
};

export default PromoSection;
