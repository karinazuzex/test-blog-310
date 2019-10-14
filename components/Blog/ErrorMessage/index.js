import Layout from "components/Layout"
import { Container } from "components/grid";

const ErrorMessage = () => {
    return (
        <Layout theme="white">
            <Container>
                <section className="blog-item section section__promo section__promo--home pb-0 text-center">
                    <h3>Sorry, please reload page...</h3>            
                </section>
            </Container>
        </Layout>
    )
}

export default ErrorMessage;