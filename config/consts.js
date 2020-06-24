import env from "./env";

export const { NODE_ENV } = env;
export const GA_TRACKING_ID =
    NODE_ENV === "development"
        ? "UA-XXXXXXXX-X"
        : env.GA_TRACKING_ID;
export const GTM_TRACKING_ID = env.GTM_TRACKING_ID;

export const WEBSITE_DOMAIN = process.WEBSITE_DOMAIN || (
    NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://www.memurai.com"
);
export const REDIS_COMPAT_FULLVER = env.REDIS_COMPAT_FULLVER || "5.0.9";
export const MEMURAI_VERSION_SHORT = env.MEMURAI_VERSION_SHORT || "1.0.8";
export const MEMURAI_VERSION = env.MEMURAI_VERSION || "1.0.8 - Redis API " + REDIS_COMPAT_FULLVER;
export const DOWNLOAD_BUTTON_TEXT =
    env.DOWNLOAD_BUTTON_TEXT
    || "Download the free Developer Edition 1.0.8";

export const MAILCHIMP_SUBSCRIBE_URL = env.NODE_ENV === "development"
    ? "https://janeasystems.us16.list-manage.com/subscribe/post?u=5788bc3268a4b1be403817cce&amp;id=d12c100c47"
    : "https://janeasystems.us16.list-manage.com/subscribe/post?u=5788bc3268a4b1be403817cce&amp;id=c705de38dc";
export const MAILCHIMP_SUBSCRIBE_NAME = env.NODE_ENV === "development"
    ? "b_5788bc3268a4b1be403817cce_d12c100c47"
    : "b_5788bc3268a4b1be403817cce_c705de38dc";

export const MAILCHIMP_DOWNLOAD_URL = env.NODE_ENV === "development"
    ? "https://janeasystems.us16.list-manage.com/subscribe/post?u=5788bc3268a4b1be403817cce&amp;id=b1466ddd5d"
    : "https://janeasystems.us16.list-manage.com/subscribe/post?u=5788bc3268a4b1be403817cce&amp;id=3c32c7ca53";
export const MAILCHIMP_DOWNLOAD_NAME = env.NODE_ENV === "development"
    ? "b_5788bc3268a4b1be403817cce_b1466ddd5d"
    : "b_5788bc3268a4b1be403817cce_3c32c7ca53";

export const RECAPTCHA_SITE_KEY = NODE_ENV === "development"
    ? "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    : "6LeJRpwUAAAAAHcLJYG0WWFZc6vLPMryh1eZrvFG";

export const TWITTER_LINK = "https://twitter.com/MemuraiHQ";
export const LINKEDIN_LINK = "https://www.linkedin.com/company/memurai";
export const GITHUB_LINK = "https://github.com/memurai";
export const FACEBOOK_LINK = "https://www.facebook.com/MemuraiHQ";
export const STACKOVERFLOW_LINK = 'https://stackoverflow.com/questions/tagged/memurai';

export const EMAIL_PATTERN =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const MEMURAI_DOCS_LINK =
    NODE_ENV === "development"
        ? "https://memuweb-docs.netlify.com"
        : "https://docs.memurai.com";
export const MEMURAI_DOCS_WINDOWS_DIFFERENCE_WITH_REDIS =
    `${MEMURAI_DOCS_LINK}/en/config-file#differences-with-redis-configuration-flags`;
export const MEMURAI_DOCS_WINDOWS_SERVICE_LINK = `${MEMURAI_DOCS_LINK}/en/windows-service`;

export const MEMURAI_SUPPORT_LINK = WEBSITE_DOMAIN + "/support";

export const MEMURAI_VS_REDIS_LINK = "https://www.memurai.com/blog/memurai-vs-redis-benchmark-comparison";

export const SHOW_DRAFTS = env.SHOW_DRAFTS==="true" || env.NODE_ENV === "development" && (typeof env.SHOW_DRAFTS === "undefined");

export const COVID19 = env.DISABLE_COVID19==="true" ? false : true;
