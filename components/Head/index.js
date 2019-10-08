import NextHead from 'next/head';
import { head, routes } from "config";



const Head = (props) => {
    const { router = {} } = props;
    const defaultTitle = head.title[router.route] || head.title.defaultValue;
    const defaultDescription = head.description[router.route] || head.description.defaultValue;
    const defaultImage = "/static/favicon/mstile-150x150.png";

    return (
        <NextHead>
            <title key="title">{props.title || defaultTitle}</title>
            <meta key="description" name="description" content={props.description || defaultDescription} />
            <meta property="og:title" content={props.title || defaultTitle}/>
            <meta property="og:image" content={props.img || defaultImage} />
        </NextHead>
    )

}

export default Head;