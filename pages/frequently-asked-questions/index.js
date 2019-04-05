import Layout from "components/Layout"

import PromoSection from "./sections/Promo";
import GetMemuraiSection from "./sections/GetMemurai";
import FAQSection from "./sections/FAQ";

const IndexPage = () => (
    <Layout theme="white">
        <PromoSection />
        <FAQSection />
        <GetMemuraiSection />
    </Layout>
);

export default IndexPage;
