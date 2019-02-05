import Layout from "components/Layout"

import PromoSection from "sections/Promo/Home";
import ReviewsSection from "sections/Reviews";
import FAQSection from "sections/FAQ";
import SubscribeSection from "sections/Subscribe";

const IndexPage = () => (
    <Layout>
        <PromoSection />
        <ReviewsSection />
        <FAQSection />
        <SubscribeSection />
    </Layout>
);

export default IndexPage;
