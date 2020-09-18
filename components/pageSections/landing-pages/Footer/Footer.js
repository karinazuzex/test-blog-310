import { Container } from './../../../grid';
import { Contacts } from '../../../Menu/Footer';

function Footer() {
  return (
    <footer role="content-info" className="footer bg-black">
      <Container>
        <Contacts />
      </Container>
    </footer>
  );
}

export default Footer;
