import { ReactElement } from 'react';
import ImageZoom from 'react-medium-image-zoom';
import marked from 'marked';
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
 * @return {ReactElement[]} Array of ReactElements
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
