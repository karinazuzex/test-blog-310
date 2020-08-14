
import Arrow from 'svg/Arrow';
import { Link } from "components/ui";
import NextLink from "next/link";
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';
import { helpers } from "utils";

const BlockItem = ({data, router: { pathname, query}}) => data.allArticles.map((item) => {
    const { _firstPublishedAt, publishDateOverride, title, category, author, id, body, slug } = item;
    const text = body.slice(0, 300).split(' ').slice(0,-1).join(' ').trim() + '...';
    const rawMarkup = marked(text);
    let convertedHtml = ReactHtmlParser(rawMarkup, helpers.parserOptions);
    const dateCreate = new Date(publishDateOverride || _firstPublishedAt).toLocaleString("en-US", helpers.optionsDateCreate);
    const time = Math.ceil(body.split(/\s/).length / 200);

    return (
        <div className="block__blog block__elem--40" key={slug}>
            <NextLink href={{ pathname: 'blog/[slug]', query: { item }}} as={`/blog/${slug}`} passHref>
                <Link className="link link--black">
                    <h4 className="blog__title blog__title--bottom">{title}</h4>
                </Link>
            </NextLink>
            <p className="blog__text blog__text--bottom">
                <NextLink href={{pathname: pathname, query: { ...query, author: author }}} passHref >
                    <Link className="blog__text--underline link link--black">{author}</Link>
                </NextLink>
                <span> on </span>
                <NextLink href={{pathname: pathname, query: { ...query, category: category }}} passHref>
                    <Link className="blog__text--underline link link--black">{item.category}</Link>
                </NextLink>
                <span> &bull; {dateCreate} &bull; </span>
                <span> {time} min read</span>
            </p>
            <NextLink href={{ pathname: 'blog/[slug]', query: { item }}} as={`/blog/${slug}`} passHref>
                <Link>
                    <p className="blog__text blog__text--bottom blog__text--link blog__text--preview">{convertedHtml}</p>
                </Link>
            </NextLink>
            <NextLink href={{ pathname: 'blog/[slug]', query: { item }}} as={`/blog/${slug}`} passHref>
                <Link className="button__arrow link link--red">
                    <span className="blog__text">Continue reading</span>
                    <Arrow />
                </Link>
            </NextLink>
        </div>
    )
});

export default BlockItem;