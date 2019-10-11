import React from 'react'
import ReactHtmlParser from 'react-html-parser'
​
class ConvertHtmlToReact extends React.Component {
​
    tranform = (node, index) => {
        if (node.type === 'tag' && node.name === 'img') {
            Object.keys(node.attribs).forEach(key => {
                if (key !== 'src') delete node.attribs[key]
            })
        }
​
        if (node.type === 'tag' && node.name === 'figcaption') {
            if (node.prev !== null && node.prev.name === 'img') {
                node.name = 'div'
                node.attribs.class = 'blog__post-img-caption'
                if (this.props.isPreview) return null
            }
        }
    }
​
    shouldComponentUpdate(nextProps) {
        if (nextProps.html === this.props.html && nextProps.isPreview === this.props.isPreview) {
            return false
        }
        return true
    }
​
    render() {
        const { html, isPreview } = this.props
​
        const options = {
            decodeEntities: true,
            transform: this.tranform
        }
        let convertedHtml = ReactHtmlParser(html, options)
        if (isPreview) {
            let stopMapping = false
            let firstElemIsImage = false
            const resultHtml = convertedHtml.map((item, idx) => {
                if (idx === 0) {
                    if (item.type === 'p') {
                        if (item.props.children.length > 0 && typeof item.props.children[0] === 'string') {
                            if (item.props.children[0].length > 500) {
                                item.props.children[0] = item.props.children[0].substring(0, 500).trim() + '...'
                                stopMapping = true
                            }
                            return item
                        }
                    } else if ((item.type === 'figure' && item.props.className === 'wp-block-image') || (item.type === 'ul' && item.props.className.split(' ').includes('wp-block-gallery'))) {
                        firstElemIsImage = true
                    }
                } else if (idx === 1) {
                    if (((item.type === 'figure' && item.props.className === 'wp-block-image') || (item.type === 'ul' && item.props.className.split(' ').includes('wp-block-gallery')))) {
                        stopMapping = true
                        return item
                    } else if (item.type === 'p' && firstElemIsImage) {
                        if (item.props.children.length > 0 && typeof item.props.children[0] === 'string') {
                            if (item.props.children[0].length > 300) {
                                item.props.children[0] = item.props.children[0].substring(0, 300).trim() + '...'
                                stopMapping = true
                            }
                            return item
                        }
                    }
                }
                return !stopMapping ? item : null
            })
​
            convertedHtml = resultHtml
        }
​
        return (
            <div className="blog__post-wp-content">{ convertedHtml }</div>
        )
    }
}
​
export default ConvertHtmlToReact