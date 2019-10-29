import Layout from "components/Layout"
import { Container } from "components/grid";

const ErrorMessage = ( { category, autor } )  => {

    let message = <h5>Sorry, please reload page...</h5>

    if (category && autor) {
        message = <h5>Sorry, unable to find "{autor}" autor for "{category}" category...</h5>
    }
    else if (category) {
        message = <h5>Sorry, unable to find "{category}" category...</h5>
    }
    else if (autor) {
        message = <h5>Sorry, unable to find "{autor}" autor...</h5>
    }

    return (
        <Layout theme="white">
            <Container>
                <section className="blog-item section section__promo section__promo--home pb-0 text-center">
                    {message}
                </section>
            </Container>
        </Layout>
    )
}

export default ErrorMessage;