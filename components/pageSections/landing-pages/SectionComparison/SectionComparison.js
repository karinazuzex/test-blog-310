import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Container, Row } from './../../../grid';
import { Button } from './../../../ui';
import ComparisonTable from '../../../Table/Comparison';
import { routes } from 'config';
import { replaceBreakLineToBrTag } from '../../../../utils/helpers';

function SectionComparison({ title = '', description = '', btnText = '', btnLink = '' }) {
  return (
    <section className="section__comparison">
      <Container>
        <h2 className="comparison__title text-center">
          {title}
        </h2>
        {description && (
          <p className="block__description text-center">
            {replaceBreakLineToBrTag(description)}
          </p>
        )}
        <div className="button__wrapper">
          {!btnLink ? (
            <NextLink href={routes.GET_MEMURAI_PAGE.path} passHref>
              <Button
                as="a"
                type="solid"
                theme="red-white"
              >
                {btnText}
              </Button>
            </NextLink>
          ) : (
            <Button
              as="a"
              type="solid"
              theme="red-white"
              target="_blank"
              href={btnLink}
            >
              {btnText}
            </Button>
          )}
        </div>
        <Container theme="reversed">
          <Row theme="no-col" className="justify-center-xs">
            <ComparisonTable />
          </Row>
        </Container>
      </Container>
    </section>
  );
}

SectionComparison.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  btnLink: PropTypes.string,
};

export default SectionComparison;

