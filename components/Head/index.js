import NextHead from "next/head";
import { head, routes } from "config";

const Head = (props) => {
  const { router = {} } = props;
  const defaultTitle = head.title[router.route] || head.title.defaultValue;
  const defaultDescription =
    head.description[router.route] || head.description.defaultValue;
  const defaultImage = "/static/favicon/mstile-150x150.png";

  return (
    <NextHead>
      <title key="title">{props.title || defaultTitle}</title>
      <meta key="description" name="description" content={props.description || defaultDescription} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.img || defaultImage} />
      <meta property="og:title" content={props.title} />
      <meta property="og:image" content={props.img} />
    </NextHead>
  );
};

export default Head;
