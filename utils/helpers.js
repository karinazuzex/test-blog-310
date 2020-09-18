import { Fragment } from 'react';
import ImageZoom from 'react-medium-image-zoom';
import marked from 'marked';
import axios from 'axios';
import ReactHtmlParser, { Options } from 'react-html-parser';

export const getAjaxUrl = url => url.replace("/post?", "/post-json?");

export const getUID = () => `"_"${Math.random().toString(36).substr(2, 9)}`;

const transform = (node, index) => {
    if (node.type === 'tag' && node.name === 'img') {
        return transformImageTag(node, index);
    }
}

const transformWithoutLinks = (node, index) => {
    if (node.type === 'tag' && node.name === 'img') {
        return transformImageTag(node, index);
    }

    if (node.type === 'tag' && node.name === 'a') {
        node.name = 'span';
        delete node.attribs.href;
    }
}

const transformImageTag = (node, index) => {
    const imgSrc = node.attribs.src || ''
    return (
        <ImageZoom
            key={index}
            image={{
                src: imgSrc,
            }}
            zoomImage={{
                src: imgSrc,
                className: 'blog__image--zoom',
            }}
            defaultStyles={{
                zoomContainer: { background: '#999999'},
                overlay: { background: '#4A4A4A'},
            }}
        />
    );
}

const parserOptions = {
    decodeEntities: true,
    transform: transform
}

export const optionsDateCreate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}

/**
 * convert markdown text to JSX objects
 * @param {string} text String of markdown source to be compiled
 * @param {boolean} withoutLinks Flag for convert link to 'span' of not
 * @param {Options} options Optional Object with options for HTMLParser function
 * @return {import('react').ReactElement[]} Array of ReactElements
 */
export const getConvertedHTML = (text, withoutLinks = false, options) => {
    if (!options) {
        options = parserOptions;
    }

    if (withoutLinks) {
        options.transform = transformWithoutLinks;
    }

    const rawMarkup = marked(text);

    return ReactHtmlParser(rawMarkup, options);
}

/**
 * create "a" DOM element and set link param to "href" attribute, then click by element
 * @param {string} link string url
 */
export function downloadByLink(link) {
    const downloadLink = document.createElement("a");
    downloadLink.href = link;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

export async function requestGeolocationData() {
    // Key from https://app.ipgeolocation.io/
    const ipgeolocation_key = '78ba6dc1da634fc2a5d91da37670f9fc';
    return await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${ipgeolocation_key}`);
}

/**
 * @return {Promise<{ ip: string, isp: string, city: string, region: string, country_name: string }>}
 */
export async function getUserGeolocation() {
    const {
        data: {
            ip = '',
            isp = '',
            city = '',
            state_prov: region = '',
            country_name = ''
        } = {}
    } = await requestGeolocationData();

    return { ip, isp, city, region, country_name };
}

/**
 * Replace all break lines to <br /> and return JSX array
 * @param {string} value converted string value
 * @returns {JSX.Element[]}
 */
export function replaceBreakLineToBrTag(value = '') {
    return value.split('\n').map((item, idx) => (
        <Fragment key={idx}>
            {item}
            <br />
        </Fragment>
    ));
}
