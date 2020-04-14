import Layout from "components/Layout"

import PromoSection from "./sections/Promo";
import SupportSection from "./sections/Support";
import SocialSection from "pages/contact/sections/Social";
const IndexPage = () => (
    <Layout theme="white">
        <PromoSection />
        <SupportSection />
        <SocialSection />
    </Layout>
);

export default IndexPage;
