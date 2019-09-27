import { Container} from "components/grid";
import Head from 'components/Head';
import { Link } from "components/ui";
import NextLink from "next/link";
import  SubscribeForm from "components/Form/Subscribe";
import { IconsShare } from 'components/Blog';

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

    let newText = body.split('\n').map((item, i) => { 
        if(item.match(/\!\[\]\((.*)\)/)){
            return (
                <div className="block__elem--40 blog__helper">
                    <img src={item.match(/\!\[\]\((.*)\)/)[1]} key = {i}/>
                </div>
            ); 
        }
        return <p className="blog__text block__elem--40" key = {i}> {item} </p>; 
    });

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
                        <Link className="blog__text--underline link link--black">{category} </Link>
                    </NextLink>
                    &bull; <span> {dateCreate} </span>&bull;
                    <span> {time} min read</span>
                </p>
                {headerImage &&
                    <div className="block__elem--50 blog__helper">
                        <img src={headerImage.url} alt="header-image"/>
                    </div>
                }
                <div>{newText}</div>

                {footerImage &&
                    <div className="block__elem--50 blog__helper">
                        <img src={footerImage.url} alt="footer-image"/>
                    </div>
                }
                <div className="blog-item-footer blog-subscribe block text-center">
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