import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";
import "../../Assets/Styles/ShareModal.scss";

function SocialShare({ location, handleClose }) {
  const currentPage = "https://" + window.location.hostname + location;

  return (
    <div className="social-share-modal" onClick={handleClose}>
      <div className="social-buttons">
        <FacebookShareButton url={currentPage}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <EmailShareButton url={currentPage}>
          <EmailIcon size={32} round={true} />
        </EmailShareButton>
        <HatenaShareButton url={currentPage}>
          <HatenaIcon size={32} round={true} />
        </HatenaShareButton>
        <InstapaperShareButton url={currentPage}>
          <InstapaperIcon size={32} round={true} />
        </InstapaperShareButton>
        <LineShareButton url={currentPage}>
          <LineIcon size={32} round={true} />
        </LineShareButton>
        <LinkedinShareButton url={currentPage}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <LivejournalShareButton url={currentPage}>
          <LivejournalIcon size={32} round={true} />
        </LivejournalShareButton>
        <MailruShareButton url={currentPage}>
          <MailruIcon size={32} round={true} />
        </MailruShareButton>
        <OKShareButton url={currentPage}>
          <OKIcon size={32} round={true} />
        </OKShareButton>
        <PinterestShareButton url={currentPage}>
          <PinterestIcon size={32} round={true} />
        </PinterestShareButton>
        <PocketShareButton url={currentPage}>
          <PocketIcon size={32} round={true} />
        </PocketShareButton>
        <RedditShareButton url={currentPage}>
          <RedditIcon size={32} round={true} />
        </RedditShareButton>
        <PocketShareButton url={currentPage}>
          <PocketIcon size={32} round={true} />
        </PocketShareButton>
        <TelegramShareButton url={currentPage}>
          <TelegramIcon size={32} round={true} />
        </TelegramShareButton>
        <TumblrShareButton url={currentPage}>
          <TumblrIcon size={32} round={true} />
        </TumblrShareButton>
        <TwitterShareButton url={currentPage}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <ViberShareButton url={currentPage}>
          <ViberIcon size={32} round={true} />
        </ViberShareButton>
        <VKShareButton url={currentPage}>
          <VKIcon size={32} round={true} />
        </VKShareButton>
        <WhatsappShareButton url={currentPage}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <WorkplaceShareButton url={currentPage}>
          <WorkplaceIcon size={32} round={true} />
        </WorkplaceShareButton>
      </div>
    </div>
  );
}
export default SocialShare;
