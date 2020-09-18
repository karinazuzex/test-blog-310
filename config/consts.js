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
        id:"Afghanistan",
        title:"Afghanistan"
    },
    {
        id:"Åland Islands",
        title:"Åland Islands"
    },
    {
        id:"Albania",
        title:"Albania"
    },
    {
        id:"Algeria",
        title:"Algeria"
    },
    {
        id:"American Samoa",
        title:"American Samoa"
    },
    {
        id:"Andorra",
        title:"Andorra"
    },
    {
        id:"Angola",
        title:"Angola"
    },
    {
        id:"Anguilla",
        title:"Anguilla"
    },
    {
        id:"Antarctica",
        title:"Antarctica"
    },
    {
        id:"Antigua and Barbuda",
        title:"Antigua and Barbuda"
    },
    {
        id:"Argentina",
        title:"Argentina"
    },
    {
        id:"Armenia",
        title:"Armenia"
    },
    {
        id:"Aruba",
        title:"Aruba"
    },
    {
        id:"Australia",
        title:"Australia"
    },
    {
        id:"Austria",
        title:"Austria"
    },
    {
        id:"Azerbaijan",
        title:"Azerbaijan"
    },
    {
        id:"Bahamas",
        title:"Bahamas"
    },
    {
        id:"Bahrain",
        title:"Bahrain"
    },
    {
        id:"Bangladesh",
        title:"Bangladesh"
    },
    {
        id:"Barbados",
        title:"Barbados"
    },
    {
        id:"Belarus",
        title:"Belarus"
    },
    {
        id:"Belgium",
        title:"Belgium"
    },
    {
        id:"Belize",
        title:"Belize"
    },
    {
        id:"Benin",
        title:"Benin"
    },
    {
        id:"Bermuda",
        title:"Bermuda"
    },
    {
        id:"Bhutan",
        title:"Bhutan"
    },
    {
        id:"Bolivia",
        title:"Bolivia"
    },
    {
        id:"Bosnia and Herzegovina",
        title:"Bosnia and Herzegovina"
    },
    {
        id:"Botswana",
        title:"Botswana"
    },
    {
        id:"Bouvet Island",
        title:"Bouvet Island"
    },
    {
        id:"Brazil",
        title:"Brazil"
    },
    {
        id:"British Indian Ocean Territory",
        title:"British Indian Ocean Territory"
    },
    {
        id:"Brunei Darussalam",
        title:"Brunei Darussalam"
    },
    {
        id:"Bulgaria",
        title:"Bulgaria"
    },
    {
        id:"Burkina Faso",
        title:"Burkina Faso"
    },
    {
        id:"Burundi",
        title:"Burundi"
    },
    {
        id:"Cambodia",
        title:"Cambodia"
    },
    {
        id:"Cameroon",
        title:"Cameroon"
    },
    {
        id:"Canada",
        title:"Canada"
    },
    {
        id:"Cape Verde",
        title:"Cape Verde"
    },
    {
        id:"Cayman Islands",
        title:"Cayman Islands"
    },
    {
        id:"Central African Republic",
        title:"Central African Republic"
    },
    {
        id:"Chad",
        title:"Chad"
    },
    {
        id:"Chile",
        title:"Chile"
    },
    {
        id:"China",
        title:"China"
    },
    {
        id:"Christmas Island",
        title:"Christmas Island"
    },
    {
        id:"Cocos (Keeling) Islands",
        title:"Cocos (Keeling) Islands"
    },
    {
        id:"Colombia",
        title:"Colombia"
    },
    {
        id:"Comoros",
        title:"Comoros"
    },
    {
        id:"Congo",
        title:"Congo"
    },
    {
        id:"Congo, The Democratic Republic of The",
        title:"Congo, The Democratic Republic of The"
    },
    {
        id:"Cook Islands",
        title:"Cook Islands"
    },
    {
        id:"Costa Rica",
        title:"Costa Rica"
    },
    {
        id:"Cote D'ivoire",
        title:"Cote D'ivoire"
    },
    {
        id:"Croatia",
        title:"Croatia"
    },
    {
        id:"Cuba",
        title:"Cuba"
    },
    {
        id:"Cyprus",
        title:"Cyprus"
    },
    {
        id:"Czech Republic",
        title:"Czech Republic"
    },
    {
        id:"Denmark",
        title:"Denmark"
    },
    {
        id:"Djibouti",
        title:"Djibouti"
    },
    {
        id:"Dominica",
        title:"Dominica"
    },
    {
        id:"Dominican Republic",
        title:"Dominican Republic"
    },
    {
        id:"Ecuador",
        title:"Ecuador"
    },
    {
        id:"Egypt",
        title:"Egypt"
    },
    {
        id:"El Salvador",
        title:"El Salvador"
    },
    {
        id:"Equatorial Guinea",
        title:"Equatorial Guinea"
    },
    {
        id:"Eritrea",
        title:"Eritrea"
    },
    {
        id:"Estonia",
        title:"Estonia"
    },
    {
        id:"Ethiopia",
        title:"Ethiopia"
    },
    {
        id:"Falkland Islands (Malvinas)",
        title:"Falkland Islands (Malvinas)"
    },
    {
        id:"Faroe Islands",
        title:"Faroe Islands"
    },
    {
        id:"Fiji",
        title:"Fiji"
    },
    {
        id:"Finland",
        title:"Finland"
    },
    {
        id:"France",
        title:"France"
    },
    {
        id:"French Guiana",
        title:"French Guiana"
    },
    {
        id:"French Polynesia",
        title:"French Polynesia"
    },
    {
        id:"French Southern Territories",
        title:"French Southern Territories"
    },
    {
        id:"Gabon",
        title:"Gabon"
    },
    {
        id:"Gambia",
        title:"Gambia"
    },
    {
        id:"Georgia",
        title:"Georgia"
    },
    {
        id:"Germany",
        title:"Germany"
    },
    {
        id:"Ghana",
        title:"Ghana"
    },
    {
        id:"Gibraltar",
        title:"Gibraltar"
    },
    {
        id:"Greece",
        title:"Greece"
    },
    {
        id:"Greenland",
        title:"Greenland"
    },
    {
        id:"Grenada",
        title:"Grenada"
    },
    {
        id:"Guadeloupe",
        title:"Guadeloupe"
    },
    {
        id:"Guam",
        title:"Guam"
    },
    {
        id:"Guatemala",
        title:"Guatemala"
    },
    {
        id:"Guernsey",
        title:"Guernsey"
    },
    {
        id:"Guinea",
        title:"Guinea"
    },
    {
        id:"Guinea-bissau",
        title:"Guinea-bissau"
    },
    {
        id:"Guyana",
        title:"Guyana"
    },
    {
        id:"Haiti",
        title:"Haiti"
    },
    {
        id:"Heard Island and Mcdonald Islands",
        title:"Heard Island and Mcdonald Islands"
    },
    {
        id:"Holy See (Vatican City State)",
        title:"Holy See (Vatican City State)"
    },
    {
        id:"Honduras",
        title:"Honduras"
    },
    {
        id:"Hong Kong",
        title:"Hong Kong"
    },
    {
        id:"Hungary",
        title:"Hungary"
    },
    {
        id:"Iceland",
        title:"Iceland"
    },
    {
        id:"India",
        title:"India"
    },
    {
        id:"Indonesia",
        title:"Indonesia"
    },
    {
        id:"Iran, Islamic Republic of",
        title:"Iran, Islamic Republic of"
    },
    {
        id:"Iraq",
        title:"Iraq"
    },
    {
        id:"Ireland",
        title:"Ireland"
    },
    {
        id:"Isle of Man",
        title:"Isle of Man"
    },
    {
        id:"Israel",
        title:"Israel"
    },
    {
        id:"Italy",
        title:"Italy"
    },
    {
        id:"Jamaica",
        title:"Jamaica"
    },
    {
        id:"Japan",
        title:"Japan"
    },
    {
        id:"Jersey",
        title:"Jersey"
    },
    {
        id:"Jordan",
        title:"Jordan"
    },
    {
        id:"Kazakhstan",
        title:"Kazakhstan"
    },
    {
        id:"Kenya",
        title:"Kenya"
    },
    {
        id:"Kiribati",
        title:"Kiribati"
    },
    {
        id:"Korea, Democratic People's Republic of",
        title:"Korea, Democratic People's Republic of"
    },
    {
        id:"Korea, Republic of",
        title:"Korea, Republic of"
    },
    {
        id:"Kuwait",
        title:"Kuwait"
    },
    {
        id:"Kyrgyzstan",
        title:"Kyrgyzstan"
    },
    {
        id:"Lao People's Democratic Republic",
        title:"Lao People's Democratic Republic"
    },
    {
        id:"Latvia",
        title:"Latvia"
    },
    {
        id:"Lebanon",
        title:"Lebanon"
    },
    {
        id:"Lesotho",
        title:"Lesotho"
    },
    {
        id:"Liberia",
        title:"Liberia"
    },
    {
        id:"Libyan Arab Jamahiriya",
        title:"Libyan Arab Jamahiriya"
    },
    {
        id:"Liechtenstein",
        title:"Liechtenstein"
    },
    {
        id:"Lithuania",
        title:"Lithuania"
    },
    {
        id:"Luxembourg",
        title:"Luxembourg"
    },
    {
        id:"Macao",
        title:"Macao"
    },
    {
        id:"Macedonia, The Former Yugoslav Republic of",
        title:"Macedonia, The Former Yugoslav Republic of"
    },
    {
        id:"Madagascar",
        title:"Madagascar"
    },
    {
        id:"Malawi",
        title:"Malawi"
    },
    {
        id:"Malaysia",
        title:"Malaysia"
    },
    {
        id:"Maldives",
        title:"Maldives"
    },
    {
        id:"Mali",
        title:"Mali"
    },
    {
        id:"Malta",
        title:"Malta"
    },
    {
        id:"Marshall Islands",
        title:"Marshall Islands"
    },
    {
        id:"Martinique",
        title:"Martinique"
    },
    {
        id:"Mauritania",
        title:"Mauritania"
    },
    {
        id:"Mauritius",
        title:"Mauritius"
    },
    {
        id:"Mayotte",
        title:"Mayotte"
    },
    {
        id:"Mexico",
        title:"Mexico"
    },
    {
        id:"Micronesia, Federated States of",
        title:"Micronesia, Federated States of"
    },
    {
        id:"Moldova, Republic of",
        title:"Moldova, Republic of"
    },
    {
        id:"Monaco",
        title:"Monaco"
    },
    {
        id:"Mongolia",
        title:"Mongolia"
    },
    {
        id:"Montenegro",
        title:"Montenegro"
    },
    {
        id:"Montserrat",
        title:"Montserrat"
    },
    {
        id:"Morocco",
        title:"Morocco"
    },
    {
        id:"Mozambique",
        title:"Mozambique"
    },
    {
        id:"Myanmar",
        title:"Myanmar"
    },
    {
        id:"Namibia",
        title:"Namibia"
    },
    {
        id:"Nauru",
        title:"Nauru"
    },
    {
        id:"Nepal",
        title:"Nepal"
    },
    {
        id:"Netherlands",
        title:"Netherlands"
    },
    {
        id:"Netherlands Antilles",
        title:"Netherlands Antilles"
    },
    {
        id:"New Caledonia",
        title:"New Caledonia"
    },
    {
        id:"New Zealand",
        title:"New Zealand"
    },
    {
        id:"Nicaragua",
        title:"Nicaragua"
    },
    {
        id:"Niger",
        title:"Niger"
    },
    {
        id:"Nigeria",
        title:"Nigeria"
    },
    {
        id:"Niue",
        title:"Niue"
    },
    {
        id:"Norfolk Island",
        title:"Norfolk Island"
    },
    {
        id:"Northern Mariana Islands",
        title:"Northern Mariana Islands"
    },
    {
        id:"Norway",
        title:"Norway"
    },
    {
        id:"Oman",
        title:"Oman"
    },
    {
        id:"Pakistan",
        title:"Pakistan"
    },
    {
        id:"Palau",
        title:"Palau"
    },
    {
        id:"Palestinian Territory, Occupied",
        title:"Palestinian Territory, Occupied"
    },
    {
        id:"Panama",
        title:"Panama"
    },
    {
        id:"Papua New Guinea",
        title:"Papua New Guinea"
    },
    {
        id:"Paraguay",
        title:"Paraguay"
    },
    {
        id:"Peru",
        title:"Peru"
    },
    {
        id:"Philippines",
        title:"Philippines"
    },
    {
        id:"Pitcairn",
        title:"Pitcairn"
    },
    {
        id:"Poland",
        title:"Poland"
    },
    {
        id:"Portugal",
        title:"Portugal"
    },
    {
        id:"Puerto Rico",
        title:"Puerto Rico"
    },
    {
        id:"Qatar",
        title:"Qatar"
    },
    {
        id:"Reunion",
        title:"Reunion"
    },
    {
        id:"Romania",
        title:"Romania"
    },
    {
        id:"Russian Federation",
        title:"Russian Federation"
    },
    {
        id:"Rwanda",
        title:"Rwanda"
    },
    {
        id:"Saint Helena",
        title:"Saint Helena"
    },
    {
        id:"Saint Kitts and Nevis",
        title:"Saint Kitts and Nevis"
    },
    {
        id:"Saint Lucia",
        title:"Saint Lucia"
    },
    {
        id:"Saint Pierre and Miquelon",
        title:"Saint Pierre and Miquelon"
    },
    {
        id:"Saint Vincent and The Grenadines",
        title:"Saint Vincent and The Grenadines"
    },
    {
        id:"Samoa",
        title:"Samoa"
    },
    {
        id:"San Marino",
        title:"San Marino"
    },
    {
        id:"Sao Tome and Principe",
        title:"Sao Tome and Principe"
    },
    {
        id:"Saudi Arabia",
        title:"Saudi Arabia"
    },
    {
        id:"Senegal",
        title:"Senegal"
    },
    {
        id:"Serbia",
        title:"Serbia"
    },
    {
        id:"Seychelles",
        title:"Seychelles"
    },
    {
        id:"Sierra Leone",
        title:"Sierra Leone"
    },
    {
        id:"Singapore",
        title:"Singapore"
    },
    {
        id:"Slovakia",
        title:"Slovakia"
    },
    {
        id:"Slovenia",
        title:"Slovenia"
    },
    {
        id:"Solomon Islands",
        title:"Solomon Islands"
    },
    {
        id:"Somalia",
        title:"Somalia"
    },
    {
        id:"South Africa",
        title:"South Africa"
    },
    {
        id:"South Georgia and The South Sandwich Islands",
        title:"South Georgia and The South Sandwich Islands"
    },
    {
        id:"Spain",
        title:"Spain"
    },
    {
        id:"Sri Lanka",
        title:"Sri Lanka"
    },
    {
        id:"Sudan",
        title:"Sudan"
    },
    {
        id:"Suriname",
        title:"Suriname"
    },
    {
        id:"Svalbard and Jan Mayen",
        title:"Svalbard and Jan Mayen"
    },
    {
        id:"Swaziland",
        title:"Swaziland"
    },
    {
        id:"Sweden",
        title:"Sweden"
    },
    {
        id:"Switzerland",
        title:"Switzerland"
    },
    {
        id:"Syrian Arab Republic",
        title:"Syrian Arab Republic"
    },
    {
        id:"Taiwan, Province of China",
        title:"Taiwan, Province of China"
    },
    {
        id:"Tajikistan",
        title:"Tajikistan"
    },
    {
        id:"Tanzania, United Republic of",
        title:"Tanzania, United Republic of"
    },
    {
        id:"Thailand",
        title:"Thailand"
    },
    {
        id:"Timor-leste",
        title:"Timor-leste"
    },
    {
        id:"Togo",
        title:"Togo"
    },
    {
        id:"Tokelau",
        title:"Tokelau"
    },
    {
        id:"Tonga",
        title:"Tonga"
    },
    {
        id:"Trinidad and Tobago",
        title:"Trinidad and Tobago"
    },
    {
        id:"Tunisia",
        title:"Tunisia"
    },
    {
        id:"Turkey",
        title:"Turkey"
    },
    {
        id:"Turkmenistan",
        title:"Turkmenistan"
    },
    {
        id:"Turks and Caicos Islands",
        title:"Turks and Caicos Islands"
    },
    {
        id:"Tuvalu",
        title:"Tuvalu"
    },
    {
        id:"Uganda",
        title:"Uganda"
    },
    {
        id:"Ukraine",
        title:"Ukraine"
    },
    {
        id:"United Arab Emirates",
        title:"United Arab Emirates"
    },
    {
        id:"United Kingdom",
        title:"United Kingdom"
    },
    {
        id:"United States",
        title:"United States"
    },
    {
        id:"United States Minor Outlying Islands",
        title:"United States Minor Outlying Islands"
    },
    {
        id:"Uruguay",
        title:"Uruguay"
    },
    {
        id:"Uzbekistan",
        title:"Uzbekistan"
    },
    {
        id:"Vanuatu",
        title:"Vanuatu"
    },
    {
        id:"Venezuela",
        title:"Venezuela"
    },
    {
        id:"Viet Nam",
        title:"Viet Nam"
    },
    {
        id:"Virgin Islands, British",
        title:"Virgin Islands, British"
    },
    {
        id:"Virgin Islands, U.S.",
        title:"Virgin Islands, U.S."
    },
    {
        id:"Wallis and Futuna",
        title:"Wallis and Futuna"
    },
    {
        id:"Western Sahara",
        title:"Western Sahara"
    },
    {
        id:"Yemen",
        title:"Yemen"
    },
    {
        id:"Zambia",
        title:"Zambia"
    },
    {
        id:"Zimbabwe",
        title:"Zimbabwe"
    }
];
