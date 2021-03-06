import { Container} from "components/grid";
import Head from 'components/Head';
import { head } from "config";
import { Link } from "components/ui";
import NextLink from "next/link";
import SubscribeForm from "components/Form/Subscribe";
import IconsShare from 'components/Blog/IconsShare';
import ImageZoom from 'react-medium-image-zoom';
import { helpers } from "utils";
import { getConvertedHTML } from "../../../utils/helpers";
import marked from 'marked'

const BlogItemPage = ({data}) => {
    const { id,
            title,
            category,
            body,
            author,
            description,
            footerImage,
            headerImage,
            _firstPublishedAt,
            publishDateOverride,
            slug
        } = data.allArticles[0];
    const seoTitle = description?.title || '';
    const seoDescription = description?.description || '';
    const seoImage = description?.image?.url || '';

    const transformText = marked(body);
    const convertedHtml = getConvertedHTML(transformText);
    const dateCreate = new Date(publishDateOverride || _firstPublishedAt).toLocaleString("en-US", helpers.optionsDateCreate);
    const time = Math.ceil(body.split(/\s/).length / 200);

    head.title[`/blog/${slug}`] = seoTitle;
    head.description[`/blog/${slug}`] = seoDescription;

    return (
        <section className="blog-item section section__promo section__promo--home pb-0 block__elem--xs">
            <Head title={seoTitle} description={seoDescription} img={seoImage}/>
            <Container>
                <div>
                    <IconsShare/>
                    <div className="blog-item-container">

                        <h1 className="block__title text-bold block__elem--xs">{title}</h1>
                        <p className="blog__text blog__text--bottom block__elem--50">
                            <NextLink href={'/blog?author=' + author} passHref>
                                <Link className="blog__text--underline link link--black">{author}</Link>
                            </NextLink>
                            <span> on </span>
                            <NextLink href={'/blog?category=' + category} passHref>
                                <Link className="blog__text--underline link link--black">{category}</Link>
                            </NextLink>
                            <span> &bull; {dateCreate} &bull; </span>
                            <span> {time} min read</span>
                        </p>
                        {headerImage &&
                            <div className="block__elem--50 blog__helper blog__image">
                                <ImageZoom
                                    image={{
                                        src: headerImage.url,
                                        alt: 'Golden Gate Bridge',
                                    }}
                                    zoomImage={{
                                        src: headerImage.url,
                                        alt: 'Golden Gate Bridge',
                                        className: 'blog__image--zoom'
                                    }}
                                    defaultStyles={{
                                        zoomContainer: { background: '#999999'},
                                        overlay: { background: '#4A4A4A'},
                                    }}
                                />
                            </div>
                        }
                        <div className="blog-item-content">{convertedHtml}</div>

                        {footerImage &&
                            <div className="block__elem--50 blog__helper blog__image">
                                <ImageZoom
                                    image={{
                                        src: footerImage.url,
                                        alt: 'Golden Gate Bridge',
                                    }}
                                    zoomImage={{
                                        src: footerImage.url,
                                        alt: 'Golden Gate Bridge',
                                        className: 'blog__image--zoom'
                                    }}
                                    defaultStyles={{
                                        zoomContainer: { background: '#999999'},
                                        overlay: { background: '#4A4A4A'},
                                    }}
                                />
                            </div>
                        }
                    </div>
                </div>
                <div className="blog-item-footer blog-subscribe block text-center">
                    <div className="blog-subscribe__line blog-subscribe__line--page"></div>
                    <h3 className="block__title block__elem blog-subscribe__title--mobile text-bold">
                        Subscribe to our newsletter
                    </h3>
                    <p className="blog__subtitle blog-subscribe__text--mobile">newsletter</p>
                    <p className="blog-subscribe__title">
                        Receive updates about key news and special offers.<br />
                    </p>
                    <SubscribeForm/>
                </div>

            </Container>

        </section>
    )
}

export default BlogItemPage;