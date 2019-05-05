import ReactGA from "react-ga";

import { GA_TRACKING_ID, WEBSITE_DOMAIN } from "./consts";

let disabled = false;

const init = couldUseGA => {
    disabled = !(GA_TRACKING_ID && WEBSITE_DOMAIN && couldUseGA);
    if (disabled) {
        return;
    }
    const testMode = GA_TRACKING_ID === "UA-XXXXXXXX-X";
    ReactGA.initialize(GA_TRACKING_ID, { testMode });
    ReactGA.set({ location: WEBSITE_DOMAIN });
    ReactGA.set({ checkProtocolTask: false });
};

const pageview = (path, title = "", trackerNames = []) => {
    if (disabled) {
        return;
    }
    ReactGA.set({
        page: path,
        title,
    });
    ReactGA.pageview(path, trackerNames, title);
};

const event = (params) => {
    if (disabled) {
        return;
    }
    ReactGA.event(params);
};

export default {
    init,
    pageview,
    event,
};
