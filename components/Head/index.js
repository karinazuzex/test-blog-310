import NextHead from "next/head";
import { head, consts } from "config";

/**
 * @param {{
 *  title?: string;
 *  description?: string;
 *  robots?: string;
 *  img?: string;
 *  router?: import("next/router").NextRouter;
 * }} props
 */
const Head = (props) => {
  const { router } = props;
  const defaultRobots = head.robots.defaultValue;
  const defaultTitle = head.title[router?.route] || head.title.defaultValue;
  const defaultDescription = head.description[router?.route] || head.description.defaultValue;

  return (
    <NextHead>
      <title key="title">{props.title || defaultTitle}</title>
      <meta key="description" name="description" content={props.description || defaultDescription} />
      <meta name="robots" content={props.robots || defaultRobots} />
      <meta name="twitter:title" content={props.title || defaultTitle} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.img || consts.DEFAULT_FAVICON_IMAGE} />
      <meta property="og:title" content={props.title || defaultTitle} />
      <meta property="og:image" content={props.img || consts.DEFAULT_FAVICON_IMAGE} />
    </NextHead>
  );
};

export default Head;
