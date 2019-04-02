import React from "react";

import { Container } from "components/grid/index";

const LegalSection = () => (
    <section className="section section__legal section__legal--terms">
        <Container>
            <div className="legal">
                <div className="legal-block">
                    <h3 className="legal-header">
                        Terms of service
                    </h3>
                </div>
                <div className="legal-block">
                    <p className="legal-paragraph">
                        Last updated: March 12, 2019
                    </p>
                    <p className="legal-paragraph">
                        Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using
                        the https://www.memurai.com website (the "Service") operated by Janea Systems, Inc. d/b/a
                        Memurai ("us", "we", or "our").
                    </p>
                    <p className="legal-paragraph">
                        Your access to and use of the Service is conditioned upon your acceptance of and compliance with
                        these Terms. These Terms apply to all visitors, users and others who wish to access or use the
                        Service.
                    </p>
                    <p className="legal-paragraph">
                        By accessing or using the Service you agree to be bound by these Terms. If you disagree with any
                        part of the terms then you do not have permission to access the Service.
                    </p>
                </div>
                <div className="legal-block">
                    <h5 className="legal-subheader">
                        Purchases
                    </h5>
                    <p className="legal-paragraph">
                        If you wish to purchase any product or service made available through the Service ("Purchase"),
                        you may be asked to supply certain information relevant to your Purchase including, without
                        limitation, your credit card number, the expiration date of your credit card, your billing
                        address, and your shipping information.
                    </p>
                    <p className="legal-paragraph">
                        You represent and warrant that: (i) you have the legal right to use any credit card(s) or other
                        payment method(s) in connection with any Purchase; and that (ii) the information you supply to
                        us is true, correct and complete.
                    </p>
                    <p className="legal-paragraph">
                        The service may employ the use of third party services for the purpose of facilitating payment
                        and the completion of Purchases. By submitting your information, you grant us the right to
                        provide the information to these third parties subject to our Privacy Policy.
                    </p>
                    <p className="legal-paragraph">
                        We reserve the right to refuse or cancel your order at any time for reasons including but not
                        limited to: product or service availability, errors in the description or price of the product
                        or service, error in your order or other reasons.
                    </p>
                    <p className="legal-paragraph">
                        We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal
                        transaction is suspected.
                    </p>
                </div>
                <div className="legal-block">
                    <h5 className="legal-subheader">
                        Availability, Errors and Inaccuracies
                    </h5>
                    <p className="legal-paragraph">
                        We are constantly updating product and service offerings on the Service. We may experience
                        delays in updating information on the Service and in our advertising on other web sites. The
                        information found on the Service may contain errors or inaccuracies and may not be complete or
                        current. Products or services may be mispriced, described inaccurately, or unavailable on the
                        Service and we cannot guarantee the accuracy or completeness of any information found on the
                        Service.
                    </p>
                    <p className="legal-paragraph">
                        We therefore reserve the right to change or update information and to correct errors,
                        inaccuracies, or omissions at any time without prior notice.
                    </p>
                </div>
            </div>
        </Container>
    </section>
);

export default LegalSection;
