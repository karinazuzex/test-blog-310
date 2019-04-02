import Layout from "components/Layout"

import PromoSection from "./sections/Promo";
import GetMemuraiSection from "./sections/GetMemurai";
import FAQSection from "./sections/FAQ";
import ComparsionSection from "./sections/Comparsion";
import InfoTopSection from "./sections/WhyMemuraiTop";
import InfoBottomSection from "./sections/WhyMemuraiBottom";
import ReviewShortSection from "./sections/ReviewShort";

const IndexPage = () => (
    <Layout theme="white">
        <PromoSection />
        <InfoTopSection />
        <ReviewShortSection />
        <InfoBottomSection />
        <ComparsionSection />
        <FAQSection />
        <GetMemuraiSection />
    </Layout>
);

export default IndexPage;
