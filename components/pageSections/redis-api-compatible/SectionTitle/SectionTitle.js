import { Container } from "../../../grid";
import { Button } from './../../../ui';

function SectionTitle() {
  return (
    <section className="section section__promo section__promo--home bg-black">
      <Container>
        <div className="block text-center text-white">
          <h1 className="block__title block__elem--lg text-normal">
            The best Redis for Windows alternative
          </h1>
          <p className="block__description">
            Memurai is a Windows native Redis-compatible cache and datastore
            <br />
            built to solve the most demanding enterprise challenges.
          </p>
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
              Talk to an expert
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionTitle;
