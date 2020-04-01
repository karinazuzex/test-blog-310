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

export default IndexPage;
