import Layout from "components/Layout";

import PromoSection from "./../../components/pageSections/index-page/Promo";
import ReviewsSection from "./../../components/pageSections/index-page/Reviews";
import InfoWithReviewSection from "./../../components/pageSections/index-page/InfoWithReview";
import ComparisonSection from "./../../components/pageSections/index-page/Comparison";
import GetMemuraiSection from "./../../components/pageSections/index-page/GetMemurai";
import SocialSection from "./../../components/pageSections/contact-page/Social";

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
