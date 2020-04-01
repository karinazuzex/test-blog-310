import Layout from "components/Layout"

import PromoSection from "./sections/Promo";
import ReviewsSection from "./sections/Reviews";
import InfoWithReviewSection from "./sections/InfoWithReview";
import ComparisonSection from "./sections/Comparison";
import GetMemuraiSection from "./sections/GetMemurai";
import AdditionalInfoSection from "./sections/AdditionalInfo";

const IndexPage = () => (
    <Layout>
        <PromoSection />
        <ReviewsSection />
        <InfoWithReviewSection />
        <ComparisonSection />
        <GetMemuraiSection />
    </Layout>
);

export default IndexPage;
