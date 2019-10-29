import Layout from "components/Layout"
import { Container } from "components/grid";

const ErrorMessage = ( {errorCategory, category })  => {
    return (
        <Layout theme="white">
            <Container>
                <section className="blog-item section section__promo section__promo--home pb-0 text-center">
                    { errorCategory ? (
                        <h5>Sorry, unable to find "{category}" category...</h5>
                    ) : (
                        <h5>Sorry, please reload page...</h5>
                    )}
                </section>
            </Container>
        </Layout>
    )
}

export default ErrorMessage;