export const getAjaxUrl = url => url.replace("/post?", "/post-json?");

export const getUID = () => `"_"${Math.random().toString(36).substr(2, 9)}`;

const transform = (node, index) => {
    if (node.type === 'tag' && node.name === 'img') {
        const imgSrc = node.attribs.src || ''
        return <ImageZoom
                    key={index}
                    image={{
                        src: imgSrc,
                    }}
                    zoomImage={{
                        src: imgSrc,
                        className: 'blog__image--zoom'
                    }}
                    defaultStyles={{
                        zoomContainer: { background: '#999999'},
                        overlay: { background: '#4A4A4A'},
                    }}
                />
    }
}

export const parserOptions = {
    decodeEntities: true,
    transform: transform
}

export const optionsDateCreate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}