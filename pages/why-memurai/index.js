import "assets/scss/index.scss";

import Layout from "components/Layout"

import PromoSection from "sections/Promo/WhyMemurai";
import GetMemuraiSection from "sections/GetMemurai";
import FAQSection from "sections/FAQ";
import ComparsionSection from "sections/Comparsion";
import InfoTopSection from "sections/Info/WhyMemuraiTop";
import InfoBottomSection from "sections/Info/WhyMemuraiBottom";

const IndexPage = () => (
    <Layout theme="white">
        <PromoSection />
        <InfoTopSection />
        <InfoBottomSection />
        <ComparsionSection />
        <FAQSection />
        <GetMemuraiSection />
    </Layout>
);

export default IndexPage;
