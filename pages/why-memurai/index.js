import Layout from "components/Layout"

import PromoSection from "./sections/Promo";
import GetMemuraiSection from "./sections/GetMemurai";
import FAQSection from "./sections/FAQ";
import ComparisonSection from "./sections/Comparison";
import InfoWithReviewSection from "./sections/InfoWithReview";

const IndexPage = () => (
    <Layout theme="white">
        <PromoSection />
        <InfoWithReviewSection />
        <ComparisonSection />
        <FAQSection />
        <GetMemuraiSection />
    </Layout>
);

export default IndexPage;
