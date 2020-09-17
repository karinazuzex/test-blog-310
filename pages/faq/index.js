import Layout from "components/Layout"

import PromoSection from "./sections/Promo";
import GetMemuraiSection from "./sections/GetMemurai";
import FAQSection from "./sections/FAQ";
import SocialSection from "pages/contact/sections/Social";

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
