import React from "react";

import { Container } from "components/grid";
import Link from "components/ui/Link";

const LegalSection = () => (
    <section className="section section__legal section__legal--privacy">
        <Container>
            <div className="legal">
                <div className="legal-block">
                    <h3 className="legal-header">
                        Privacy policy
                    </h3>
                </div>
                <div className="legal-block">
                    <p className="legal-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur dolorem
                        excepturi, exercitationem illum odio officia rerum similique totam? Assumenda blanditiis debitis
                        eveniet hic impedit itaque minima perspiciatis quidem. Commodi deserunt doloribus eos nobis,
                        repellendus reprehenderit. Cupiditate earum eveniet quidem velit voluptatem. Libero minima nostrum
                        ratione rerum sed, ut.
                    </p>
                    <p className="legal-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur dolorem
                        excepturi, exercitationem illum odio officia rerum similique totam? Assumenda blanditiis debitis
                        eveniet hic impedit itaque minima perspiciatis quidem. Commodi deserunt doloribus eos nobis,
                        repellendus reprehenderit. Cupiditate earum eveniet quidem velit voluptatem. Libero minima nostrum
                        ratione rerum sed, ut.
                    </p>
                </div>
                <div className="legal-block">
                    <h5 className="legal-subheader">
                        Lorem ipsum dolor sit.
                    </h5>
                    <div className="legal-block">
                        <ul className="list list--lines">
                            <li className="list__item">Lorem ipsum dolor sit.</li>
                            <li className="list__item">Lorem ipsum dolor sit.</li>
                            <li className="list__item">Lorem ipsum dolor sit.</li>
                            <li className="list__item">Lorem ipsum dolor sit.</li>
                        </ul>
                    </div>
                </div>
                <div className="legal-block">
                    <Link theme="red">
                        Some link
                    </Link>
                </div>
                <div className="legal-block">
                    <ol className="list list--ordered">
                        <li className="list__item">Lorem ipsum dolor sit.</li>
                        <li className="list__item">Lorem ipsum dolor sit.</li>
                        <li className="list__item">Lorem ipsum dolor sit.</li>
                        <li className="list__item">Lorem ipsum dolor sit.</li>
                    </ol>
                </div>
            </div>
        </Container>
    </section>
);

export default LegalSection;
