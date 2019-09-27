import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from 'react-share';
import {
    FacebookLogo,
    TwitterLogo,
    LinkedInLogo,
    Upload,
    Close
} from 'svg';

class IconsShare extends React.Component {

    state = {
        openShare: false
    }

    render() {

        const { openShare } = this.state;
        const url = window.location.href; 

        return(
            <div className={`share ${openShare ? "active" : ""}`}>
                <div className="wrap"></div>
                <div className="share-block">
                    <p className="share__title link m-menu__link">SHARE</p>
                    <div className="share__icon share__icon--red share__icon--twitter">
                        <TwitterShareButton url={url} round={true}>
                            <TwitterLogo/>
                        </TwitterShareButton>
                    </div>
                    <div className="share__icon share__icon--red share__icon--linkedin">
                        <LinkedinShareButton url={url} round={true}>
                            <LinkedInLogo/>
                        </LinkedinShareButton>
                    </div>
                    <div className="share__icon share__icon--red share__icon--facebook">
                        <FacebookShareButton url={url} round={true}>
                            <FacebookLogo/>
                        </FacebookShareButton>
                    </div>
                    <div className="share-upload share__icon"
                        onClick={() => this.setState({
                            openShare: !openShare
                        })}>
                        <div className="share__icon share-upload__icon share-upload--open">
                            <Upload/>
                        </div>
                        <div className="share__icon share-upload__icon share-upload--close">
                            <Close/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IconsShare;