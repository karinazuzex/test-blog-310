import Layout from "components/Layout"

import PromoSection from "./sections/Promo";
import SocialSection from "./sections/Social";
import LocationSection from "./sections/Location";

const ContactPage = () => (
    <Layout theme="white">
        <PromoSection />
        <SocialSection />
        <LocationSection />
    </Layout>
);

export default ContactPage;
