import Layout from "components/Layout"

import PromoSection from "./sections/Promo";
import ReviewsSection from "./sections/Reviews";
import InfoWithReviewSection from "./sections/InfoWithReview";
import ComparisonSection from "./sections/Comparison";
import GetMemuraiSection from "./sections/GetMemurai";
import AdditionalInfoSection from "./sections/AdditionalInfo";
import SocialSection from "pages/contact/sections/Social";

const IndexPage = () => (
    <Layout>
        <PromoSection />
        <ReviewsSection />
        <InfoWithReviewSection />
        <ComparisonSection />
        <GetMemuraiSection />
        <AdditionalInfoSection />
        <SocialSection />
    </Layout>
);

export default IndexPage;
