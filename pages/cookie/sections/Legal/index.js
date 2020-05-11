import React, { Component } from "react";

import { Container } from "components/grid";

class LegalSection extends Component {
  render() {
    return (
      <section className="section section__legal section__legal--cookie">
        <Container>
          <div className="legal">
            <div className="legal-block">
              <h3 className="legal-header">Cookie policy</h3>
            </div>
            <div className="legal-block">
              <script
                id="CookieDeclaration"
                src="https://consent.cookiebot.com/ad4b92a8-bdac-4756-852d-30e83d1feba3/cd.js"
                type="text/javascript"
                async
              ></script>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

export default LegalSection;
