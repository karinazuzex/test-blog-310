import Layout from "components/Layout"

import PromoSection from "./../../components/pageSections/faq-page/Promo";
import GetMemuraiSection from "./../../components/pageSections/faq-page/GetMemurai";
import FAQSection from "./../../components/pageSections/faq-page/FAQ";
import SocialSection from "./../../components/pageSections/contact-page/Social";

const IndexPage = () => (
    <Layout theme="white">
        <PromoSection />
        <FAQSection />
        <GetMemuraiSection />
        <SocialSection />
    </Layout>
);

/**
 * Hack for off Automatic Static Optimization for this page
 * This need for environment variables changed (if they was changed in file) after restart server
 */
export async function getServerSideProps() {
    return { props: {} };
}

export default IndexPage;
