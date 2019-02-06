import React from "react";

import { Container } from "components/grid/index";
import ContactForm from "components/Form/Contact";

const ContactSection = () => (
    <section className="section section__contact bg-white-grey">
        <Container>
            <div className="block">
                <ContactForm />
            </div>
        </Container>
    </section>
);

export default ContactSection;
