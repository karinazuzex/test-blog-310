import Layout from 'components/Layout'

import CookieSection from 'components/pageSections/terms-page/CookieSection/CookieSection'
import PrivacySection from 'components/pageSections/terms-page/PrivacySection/PrivacySection'
import LegalSection from './../../components/pageSections/terms-page/Legal'

const TermsPage = () => (
    <Layout theme="white">
        <LegalSection />
        <PrivacySection />
        <CookieSection />
    </Layout>
)

export default TermsPage
