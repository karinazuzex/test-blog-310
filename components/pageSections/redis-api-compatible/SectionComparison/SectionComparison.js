import NextLink from 'next/link';
import { Container, Row } from './../../../grid';
import { Link, Button } from './../../../ui';
import ComparisonTable from '../../../Table/Comparison';
import { routes } from 'config';

function SectionComparison() {
  return (
    <section className="section__comparison">
      <Container>
        <h2 className="comparison__title text-center">
          Memurai: Redis compatible datastore for Windows
        </h2>
        <p className="block__description text-center">
          Memurai is a rock solid Redis alternative for Windows.
          <br />
          Redis server Windows native build that offers seamlessly integration with existing tools and workflows.
          <br />
          Download Memurai Developer for free.
        </p>
        <div className="button__wrapper">
          <NextLink href={routes.GET_MEMURAI_PAGE.path} passHref>
            <Button
              as="a"
              type="solid"
              theme="red-white"
            >
              TRY MEMURAI FOR FREE TODAY
            </Button>
          </NextLink>
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

export default SectionComparison;

