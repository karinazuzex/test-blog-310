import { Container } from "components/grid";
import NextLink from "next/link";
import { Link, Checkbox } from "components/ui";
import { routes } from "config";

const SubscribeForm = (props) => {
    const { right, footer} = props
    return (
        <div className="subscribe">
            { right &&
                <form className="subscribe-right block__elem--80">
                    <p className="blog__subtitle blog__subtitle--bottom">newsletter</p>
                    <p className="subscribe-right__text subscribe-right__text--bottom">Receive updates about key news and special offers.</p>
                    <div className="block__elem--xs">
                        <label className="subscribe-right__label subscribe-right__label--bottom blog__text--semibold" htmlFor="">EMAIL ADDRESS</label>
                        <input className="subscribe-right__input" type="text"/>
                    </div>

                    <button className="button subscribe-right subscribe-right__btn blog__text--semibold button__solid--red-white button--red-white">subscribe</button>
                </form>
            }
            { footer &&
                <div className="subscribe-footer subscribe-footer--border">
                    <Container>
                        <div className="subscribe-footer-block">
                            <h3 className="block__title text-bold">Subscribe to our newsletter</h3>
                            <p className="blog-form__text blog-form__text--bottom block__elem--80">Receive updates about key news and special offers</p>
                            <form className="email">
                                <div className="email-form block__elem--xs">
                                    <label className="form__group-label" htmlFor="">EMAIL ADDRESS</label>
                                    <input type="text" className="input email__input"/>
                                </div>

                                <div className="email-policy">
                                    <Checkbox
                                    >
                                        I agree to the&nbsp;
                                        <NextLink href={routes.TERMS_PAGE.path} passHref prefetch>
                                            <Link theme="red">
                                                {routes.TERMS_PAGE.nameLong}
                                            </Link>
                                        </NextLink> and&nbsp;
                                        <NextLink href={routes.PRIVACY_PAGE.path} passHref prefetch>
                                            <Link theme="red">
                                                {routes.PRIVACY_PAGE.nameLong}
                                            </Link>
                                        </NextLink>
                                    </Checkbox>
                                    <button className="button subscribe-footer__btn button__solid button__solid--red-white button--red-white" type="submit">submit</button>
                                </div>
                            </form>
                        </div>
                    </Container>
                </div>
            }
        </div>
    )
}

export default SubscribeForm;