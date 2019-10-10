import { Container} from "components/grid";
import Head from 'components/Head';
import { Link } from "components/ui";
import NextLink from "next/link";
import  SubscribeForm from "components/Form/Subscribe";
import { IconsShare } from 'components/Blog';
import ImageZoom from 'react-medium-image-zoom';
import marked from 'marked';

const BlogItemPage = ({data}) => {
    const { id, 
            title, 
            category, 
            body, 
            autor, 
            description,
            footerImage, 
            headerImage, 
            _firstPublishedAt
        } = data.allArticles[0];
    let seoTitle = '', seoDescription = '', seoImage = { url: "/static/favicon/mstile-150x150.png"};
    if (description) {
        seoTitle = description.title
        seoDescription = description.description
        seoImage = description.image
    }
    const optionsCreate = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    const rawMarkup = marked(body, {sanitize: true});
    
    const textMarked = { __html: rawMarkup };

    const dateCreate = new Date(_firstPublishedAt).toLocaleString("en-US", optionsCreate);

    const time = Math.ceil(body.split(/\s/).length / 200);
    
    return (
        <section className="blog-item section section__promo section__promo--home pb-0 block__elem--xs">
            <Head title={seoTitle} description={seoDescription} img={seoImage.url}/>
            <Container>
                <h3 className="block__title text-bold block__elem--xs">{title}</h3>
                <p className="blog__text blog__text--bottom block__elem--50">
                    <NextLink href={'/blog?autor=' + autor} passHref prefetch>
                        <Link className="blog__text--underline link link--black">{autor}</Link>
                    </NextLink>
                    <span> on </span>
                    <NextLink href={'/blog?category=' + category} passHref prefetch>
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
                                zoomImage: { width: '100%'},
                            }}
                        />
                    </div>
                }
                <div className="blog-item-content" dangerouslySetInnerHTML={textMarked} ></div>

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
                                zoomImage: { width: '100%'},
                            }}
                        />
                    </div>
                }
                
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
                
                <IconsShare/>
            </Container>
            
        </section>
    )
}

export default BlogItemPage;