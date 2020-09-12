import { Container } from './../../../grid';
import MemuraiMapImage from './../../../../static/images/memurai-map-landingpage.png';

function SectionInstall() {
  return (
    <section className="section__install">
      <Container>
        <h2 className="install__title text-center">
          Install your Redis Windows alternative in seconds.
          <br />
          Work with a dedicated team of experts.
        </h2>
        <div className="install__wrapper">
          <p className="block__description text-center">
            Are you still looking to solve the issues caused by the retired, and archived Redis Windows version 3.x?
            The known security vulnerabilities from version 3.x are keeping you up at night?
            Try out Memurai. An in-place Redis Windows replacement, compatible with version 5.0.9.
            It is very likely you will need to do just an upgrade. Little or no developer work will be needed to be up and running and up to date.
            Try out Memurai today.
          </p>
          <div className="install__image">
            <img src={MemuraiMapImage} alt="memurai-map" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionInstall;

