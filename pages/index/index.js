import Layout from "components/Layout";

import PromoSection from "./sections/Promo";
import ReviewsSection from "./sections/Reviews";
import InfoWithReviewSection from "./sections/InfoWithReview";
import ComparisonSection from "./sections/Comparison";
import GetMemuraiSection from "./sections/GetMemurai";
import SocialSection from "pages/contact/sections/Social";

const IndexPage = () => (
  <Layout>
    <PromoSection />
    <InfoWithReviewSection />
    <ComparisonSection />
    <ReviewsSection />
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
