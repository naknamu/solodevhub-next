import { BsFacebook, BsTwitter, BsReddit } from "react-icons/bs";
import Link from "next/link";
import { forwardRef } from "react";

import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
} from "react-share";

const Hero = forwardRef(({ scrollToChild }, ref) => {
  const shareUrl = "https://www.solodevhub.com/";

  return (
    <div className="hero" ref={ref}>
      <div className="container">
        <h1 className="h1">
          Insights, tutorials, and career advice for <b>solo developers</b>
        </h1>
        <div className="details">
          <p className="h3">Created for solo developers by a solo developer.</p>
        </div>

        <div className="btn-group">
          <button className="btn btn-primary" onClick={scrollToChild}>
            Explore blog
          </button>
          <button className="btn btn-secondary">
            <Link href="/about-us" target="_blank">
              About us
            </Link>
          </button>
        </div>

        <div className="social-media">
          <p className="h4 text">
            Help us by sharing this site to those who are solo developers:{" "}
          </p>
          <div className="icon-wrapper">
            <FacebookShareButton url={shareUrl}>
              <BsFacebook className="icon" />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl}>
              <BsTwitter className="icon" />
            </TwitterShareButton>
            <RedditShareButton url={shareUrl}>
              <BsReddit className="icon" />
            </RedditShareButton>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Hero;
