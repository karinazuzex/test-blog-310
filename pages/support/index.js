import Layout from "components/Layout";

import PromoSection from "./../../components/pageSections/support-page/Promo";
import SupportSection from "./../../components/pageSections/support-page/Support";
import SocialSection from "./../../components/pageSections/contact-page/Social";
import AdditionalSection from "../../components/pageSections/support-page/Additional";

const IndexPage = () => (
    <Layout theme="white">
        <SupportSection />
        <AdditionalSection />
        <SocialSection />
    </Layout>
);

export default IndexPage;
