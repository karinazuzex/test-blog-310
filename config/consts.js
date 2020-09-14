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

export const DEFAULT_FAVICON_IMAGE = "/static/favicon/mstile-150x150.png";

export const languages = [
    {
        id: "EN",
        title: "English"
    },
    {
        id: "FR",
        title: "Français"
    },
    {
        id: "SQ",
        title: "Shqip"
    },
    {
        id: "AM",
        title: "አማርኛ"
    },
    {
        id: "AR",
        title: "العربية"
    },
    {
        id: "AZ_AZ",
        title: "Azərbaycanca"
    },
    {
        id: "BN",
        title: "বাংলা"
    },
    {
        id: "BG",
        title: "Български"
    },
    {
        id: "CA",
        title: "Català"
    },
    {
        id: "ZH_CN",
        title: "简体中文 (China)"
    },
    {
        id: "ZH_TW",
        title: "繁體中文 (Taiwan)"
    },
    {
        id: "HR",
        title: "Hrvatski"
    },
    {
        id: "CS",
        title: "Česky"
    },
    {
        id: "DA",
        title: "Dansk"
    },
    {
        id: "NL",
        title: "Nederlands"
    },
    {
        id: "ET",
        title: "Eesti"
    },
    {
        id: "FIL",
        title: "Pilipino"
    },
    {
        id: "FI",
        title: "Suomi"
    },
    {
        id: "DE",
        title: "Deutsch"
    },
    {
        id: "EL",
        title: "Ελληνικά"
    },
    {
        id: "GU",
        title: "ગુજરાતી"
    },
    {
        id: "HE",
        title: "‏עברית‏"
    },
    {
        id: "HI_IN",
        title: "हिंदी"
    },
    {
        id: "HU",
        title: "Magyar"
    },
    {
        id: "ID",
        title: "Bahasa Indonesia"
    },
    {
        id: "IT",
        title: "Italiano"
    },
    {
        id: "JA",
        title: "日本語"
    },
    {
        id: "KN",
        title: "ಕನ್ನಡ"
    },
    {
        id: "KO",
        title: "한국어"
    },
    {
        id: "LV",
        title: "Latviešu"
    },
    {
        id: "LT",
        title: "Lietuviškai"
    },
    {
        id: "MS",
        title: "Bahasa Melayu"
    },
    {
        id: "ML",
        title: "മലയാളം"
    },
    {
        id: "MR",
        title: "मराठी"
    },
    {
        id: "NO",
        title: "Norsk"
    },
    {
        id: "FA",
        title: "فارسی"
    },
    {
        id: "PL",
        title: "Polski"
    },
    {
        id: "PT",
        title: "Português (PT)"
    },
    {
        id: "RO",
        title: "Română"
    },
    {
        id: "RU",
        title: "Pусский"
    },
    {
        id: "SR",
        title: "Српски"
    },
    {
        id: "SK",
        title: "Slovenčina"
    },
    {
        id: "SL",
        title: "Slovenščina"
    },
    {
        id: "ES",
        title: "Español"
    },
    {
        id: "SW",
        title: "Kiswahili"
    },
    {
        id: "SV",
        title: "Svensk"
    },
    {
        id: "TA",
        title: "தமிழ்"
    },
    {
        id: "TE",
        title: "తెలుగు"
    },
    {
        id: "TH",
        title: "ภาษาไทย"
    },
    {
        id: "TR",
        title: "Türkçe"
    },
    {
        id: "UK",
        title: "Українська"
    },
    {
        id: "UZ",
        title: "Oʻzbekcha"
    },
    {
        id: "VI",
        title: "Tiếng Việt"
    }
];
