import { Container } from "../../../grid";
import Mediarail from "./../../../../static/images/logos/mediarail-logo-landing-page.png";
import Telekom from './../../../../static/images/logos/telekom-logo-landing-page.png';
import Csiro from './../../../../static/images/logos/csiro-logo-landing-page.png';
import HillsCollege from './../../../../static/images/logos/hillscollege-logo-landing-page.png';
import Teoco from './../../../../static/images/logos/teoco-logo-landing-page.png';

function SectionTrust() {
  return (
    <section className="section__trust">
      <Container>
        <p className="block__description text-center">
        Trusted by the smallest startups all the way to the largest enterprises on five continents
        </p>
        <div className="trusted__wrapper">
          <div className="trusted__list">
            <div className="trusted__item">
              <img src={Mediarail} alt="Mediarail" />
            </div>
            <div className="trusted__item">
              <img src={Telekom} alt="Telekom" />
            </div>
            <div className="trusted__item">
              <img src={Csiro} alt="CSIRO" />
            </div>
            <div className="trusted__item">
              <img src={HillsCollege} alt="hills college" />
            </div>
            <div className="trusted__item">
              <img src={Teoco} alt="TEOCO" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionTrust;

