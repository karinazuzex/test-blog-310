export const getAjaxUrl = url => url.replace("/post?", "/post-json?");

export const getUID = () => `"_"${Math.random().toString(36).substr(2, 9)}`;
