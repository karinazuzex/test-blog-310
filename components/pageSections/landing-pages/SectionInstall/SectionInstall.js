import PropTypes from 'prop-types';
import { Container } from './../../../grid';
import MemuraiMapImage from './../../../../static/images/memurai-map-landingpage.png';
import { replaceBreakLineToBrTag } from '../../../../utils/helpers';

function SectionInstall({ title = '', description = '', image = '' }) {
  return (
    <section className="section__install">
      <Container>
        <h2 className="install__title text-center">
          {replaceBreakLineToBrTag(title)}
        </h2>
        <div className="install__wrapper">
          <p className="block__description text-center">
            {replaceBreakLineToBrTag(description)}
          </p>
          <div className="install__image">
            <img src={image || MemuraiMapImage} />
          </div>
        </div>
      </Container>
    </section>
  );
}

SectionInstall.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default SectionInstall;

