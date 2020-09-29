import { useRef, useEffect } from "react";

import { Container } from "components/grid";

function LegalSection() {
  const content = useRef(null);

  useEffect(() => {
    const cookieScript = document.createElement("script");
    cookieScript.type = "text/javascript";
    cookieScript.async = true;
    cookieScript.src = "https://consent.cookiebot.com/ad4b92a8-bdac-4756-852d-30e83d1feba3/cd.js";
    content.current.appendChild(cookieScript);
  }, []);

  return (
    <section className="section section__legal section__legal--cookie">
      <Container>
        <div className="legal">
          <div className="legal-block">
            <h3 className="legal-header">Cookie policy</h3>
          </div>
          <div className="legal-block" ref={content} />
        </div>
      </Container>
    </section>
  );
}

export default LegalSection;
