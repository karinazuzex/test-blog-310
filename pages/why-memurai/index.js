import Layout from "components/Layout"

import PromoSection from "./sections/Promo";
import GetMemuraiSection from "./sections/GetMemurai";
import FAQSection from "./sections/FAQ";
import ComparsionSection from "./sections/Comparsion";
import InfoWithReviewSection from "./sections/InfoWithReview";

const IndexPage = () => (
    <Layout theme="white">
        <PromoSection />
        <InfoWithReviewSection />
        <ComparsionSection />
        <FAQSection />
        <GetMemuraiSection />
    </Layout>
);

export default IndexPage;
