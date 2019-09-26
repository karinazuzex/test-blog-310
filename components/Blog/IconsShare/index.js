import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from 'react-share';

import {
    FacebookLogo,
    TwitterLogo,
    LinkedInLogo
} from 'svg'

const IconsShare = () => {
    return(
        <div className="share">
            <div className="share-wrap">
                
            </div>
            <div className="share-block">
                <p className="share__title link m-menu__link">SHARE</p>
                <div className="share__icon">
                    <TwitterShareButton url='http://localhost:3000/blog?news' round={true}>
                        <LinkedInLogo/>
                    </TwitterShareButton>
                </div>
                <div className="share__icon">
                    <LinkedinShareButton url='http://localhost:3000/blog?news' round={true}>
                        <TwitterLogo/>
                    </LinkedinShareButton>
                </div>
                <div className="share__icon">
                    <FacebookShareButton url='http://localhost:3000/blog?news' round={true}>
                        <FacebookLogo/>
                    </FacebookShareButton>
                </div>
            </div>

        </div>
    )
}

export default IconsShare;