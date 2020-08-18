import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from 'react-share';
import FacebookLogo from 'svg/FacebookLogo';
import TwitterLogo from 'svg/TwitterLogo';
import LinkedInLogo from 'svg/LinkedInLogo';
import Upload from 'svg/Upload';
import Close from 'svg/Close';

class IconsShare extends React.Component {

    state = {
        openShare: false,
        url: ''
    }

    componentDidMount() {
        this.setState({
            url: window.location.href
        })
    }

    render() {
        const { openShare, url } = this.state;

        return(
            <div className={`share ${openShare ? "active" : ""}`}>
                <div
                    className="wrap"
                    onClick={() => this.setState({openShare: false})}
                ></div>
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