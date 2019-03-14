import React, { Component } from "react";

import { Container } from "components/grid";

class LegalSection extends Component {
    componentDidMount() {
        const cookieScript = document.createElement("script");
        cookieScript.id = "CookieDeclaration";
        cookieScript.async = true;
        cookieScript.type = "text/javascript";
        cookieScript.src = "https://consent.cookiebot.com/ad4b92a8-bdac-4756-852d-30e83d1feba3/cd.js";
        this.content.appendChild(cookieScript);
    }
    render() {
        return (
            <section className="section section__legal section__legal--privacy">
                <Container>
                    <div className="legal">
                        <div className="legal-block">
                            <h3 className="legal-header">
                                Cookie policy
                            </h3>
                        </div>
                        <div
                            className="legal-block"
                            ref={(ref => { this.content = ref })}
                        />
                    </div>
                </Container>
            </section>
        );
    }
}

export default LegalSection;
