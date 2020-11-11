import React from "react";

export default function SocialFedds() {
  return (
    <>
      <aside className="mb-4 widget widget-twitter">
        <div className="widget-twitter-inner">
          <h5 className="widget-meta">
            <i className="fab fa-twitter mr-2"></i>Twitter feed{" "}
            <a href="http://twitter.com/chivalricblog">@tomasdetloging</a>
          </h5>
          <div className="row tweet-texts">
            <p>
              Check out new post on my blog{" "}
              <a href="http://twitter.com/#natureshot">#natureshot</a>{" "}
              <a href="http://bit.ly/blog">http://bit.ly/blog</a>
            </p>
          </div>
          <div className="row timepast">1 day ago</div>
        </div>
      </aside>
    </>
  );
}
