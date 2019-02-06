import Layout from "components/Layout"

import PromoSection from "sections/Promo/Contact";
import SocialSection from "sections/Social";
import LocationSection from "sections/Location";
import ContactSection from "sections/Contact";

const ContactPage = () => (
    <Layout theme="white">
        <PromoSection />
        <ContactSection />
        <SocialSection />
        <LocationSection />
    </Layout>
);

export default ContactPage;
