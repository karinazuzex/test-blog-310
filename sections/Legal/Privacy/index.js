import React, { Component } from "react";

import { Container } from "components/grid";

class LegalSection extends Component {
    componentDidMount() {
        const privacyScript = document.createElement("script");
        privacyScript.type = "text/javascript";
        privacyScript.innerHTML = "(function (w,d) {var loader = function () {var s = d.createElement(\"script\"), tag = d.getElementsByTagName(\"script\")[0]; s.src=\"https://cdn.iubenda.com/iubenda.js\"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener(\"load\", loader, false);}else if(w.attachEvent){w.attachEvent(\"onload\", loader);}else{w.onload = loader;}})(window, document);";
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
