import Layout from "components/Layout"

import PromoSection from "./../../components/pageSections/support-page/Promo";
import SupportSection from "./../../components/pageSections/support-page/Support";
import SocialSection from "./../../components/pageSections/contact-page/Social";

const IndexPage = () => (
    <Layout theme="white">
        <PromoSection />
        <SupportSection />
        <SocialSection />
    </Layout>
);

export default IndexPage;
