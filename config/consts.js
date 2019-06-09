import env from "./env";

export const { NODE_ENV } = env;
export const GA_TRACKING_ID =
    NODE_ENV === "development"
        ? "UA-XXXXXXXX-X"
        : env.GA_TRACKING_ID;
export const WEBSITE_DOMAIN = process.WEBSITE_DOMAIN || (
    NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://www.memurai.com"
);
export const MEMURAI_VERSION = env.MEMURAI_VERSION || "1.0.8 - Redis API 5";
export const DOWNLOAD_BUTTON_TEXT =
    env.DOWNLOAD_BUTTON_TEXT
    || "Download Memurai Technical Preview 1.0.8";

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

export const EMAIL_PATTERN =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const MEMURAI_DOCS_LINK =
    NODE_ENV === "development"
        ? "https://memuweb-docs.netlify.com"
        : "https://docs.memurai.com";
export const MEMURAI_DOCS_WINDOWS_DIFFERENCE_WITH_REDIS =
    `${MEMURAI_DOCS_LINK}/en/config-file#difference-with-redis-configuration-flags`;
export const MEMURAI_DOCS_WINDOWS_SERVICE_LINK = `${MEMURAI_DOCS_LINK}/en/windows-service`;

export const MEMURAI_SUPPORT_LINK = "https://support.memurai.com";
