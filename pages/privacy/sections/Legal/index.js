import React, { Component } from "react";

import { Container } from "components/grid/index";

class LegalSection extends Component {
    componentDidMount() {
        const privacyScript = document.createElement("script");
        privacyScript.type = "text/javascript";
        privacyScript.async = true;
        privacyScript.src = "https://cdn.iubenda.com/iubenda.js";
        this.content.appendChild(privacyScript);
    }
    render() {
        return (
            <section className="section section__legal section__legal--privacy">
                <Container>
                    <div className="legal">
                        <div className="legal-block">
                            <h3 className="legal-header">
                                Privacy policy
                            </h3>
                        </div>
                        <div
                            className="legal-block"
                            ref={(ref => { this.content = ref })}
                        >
                            <a
                                href="https://www.iubenda.com/privacy-policy/51544864"
                                className="iubenda-white no-brand iubenda-embed iub-body-embed"
                                title="Privacy Policy"
                            />
                        </div>
                    </div>
                </Container>
            </section>
        );
    }
}

export default LegalSection;
