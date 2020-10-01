import React from "react";

export default function SocialFedds() {
  return (
    <>
      <aside class="mb-4 widget widget-twitter">
        <div class="widget-twitter-inner">
          <h5 class="widget-meta">
            <i class="fab fa-twitter mr-2"></i>Twitter feed{" "}
            <a href="http://twitter.com/chivalricblog">@tomasdetloging</a>
          </h5>
          <div class="row tweet-texts">
            <p>
              Check out new post on my blog{" "}
              <a href="http://twitter.com/#natureshot">#natureshot</a>{" "}
              <a href="http://bit.ly/blog">http://bit.ly/blog</a>
            </p>
          </div>
          <div class="row timepast">1 day ago</div>
        </div>
      </aside>
      {/* 
      <aside class="mb-4 widget widget-instagram">
        <div class="widget-instagram-inner">
          <h5 class="widget-meta">
            <i class="fab fa-twitter mr-2"></i>instagram feed{" "}
            <a href="http://twitter.com/chivalricblog">@tomasdetloging</a>
          </h5>
          <div id="instafeed"></div>
        </div>
      </aside> */}
    </>
  );
}
