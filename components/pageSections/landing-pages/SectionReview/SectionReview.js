import { Container } from './../../../grid';
import AvatarImage from './../../../../static/images/review/Sin-titulo-1.png';
import CompanyLogo from './../../../../static/images/review/featured-upvoted-logo-landingpage.png';

function SectionReview() {
  return (
    <section className="section__review">
      <Container>
        <div className="review__wrapper">
          <div className="review__block-left">
            <div className="avatar">
              <img src={AvatarImage} alt="" />
            </div>
            <div className="avatar-under">
              <img src={CompanyLogo} alt="" />
            </div>
            <div className="avatar-under--text text-center">
              <b>STEVE MCLEOD</b>
              <br />
              <span>CTO</span>
            </div>
          </div>
          <div className="review__block-right">
            <p className="block__description text-center">
              Migrating from an old legacy hardware and software system to the Microsoft stack was an interesting journey.
              Our in-house developers are well versed and trained on Windows, .net, Azure and all the other tools available from the Microsoft ecosystem.
              We explored several alternatives and come to the conclusion that Memurai is the most effective way to solve our engineering goals.
              The Memurai developers showed that they know what they are doing.
              I am looking forward to working with the Memurai team for years to come.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionReview;

