import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import "./OurWorks.scss";
import "lightbox.js-react/dist/index.css";

export default function OurWorks() {
  return <section className="OurWorks container" id="our_works">
      <h2 className="anim_item">Наші роботи</h2>
      <h3 className="anim_item">
        Ми готові реалізувати будь-які Ваші задумки. Нас не лякають складні
        проекти!
      </h3>
      <div className="box_gallery">
        <LightGallery addClass="box_slider" allowMediaOverlap={true} closeOnTap={true} download={false} getCaptionFromTitleOrAlt={false} speed={500}>
          <a href="https://vladislavkiselov.github.io/Concrete-Jungle/img/gallery/img1.jpg">
            <img alt="img1" src="/img/gallery/img1.jpg" />
          </a>
          <a href="https://vladislavkiselov.github.io/Concrete-Jungle/img/gallery/img2.jpg">
            <img alt="img1" src="/img/gallery/img2.jpg" />
          </a>
          <a href="https://vladislavkiselov.github.io/Concrete-Jungle/img/gallery/img3.jpg">
            <img alt="img1" src="/img/gallery/img3.jpg" />
          </a>
          <a href="https://vladislavkiselov.github.io/Concrete-Jungle/img/gallery/img4.jpg">
            <img alt="img1" src="/img/gallery/img4.jpg" />
          </a>
          <a href="https://vladislavkiselov.github.io/Concrete-Jungle/img/gallery/img5.jpg">
            <img alt="img1" src="/img/gallery/img5.jpg" />
          </a>
          <a href="https://vladislavkiselov.github.io/Concrete-Jungle/img/gallery/img6.jpg">
            <img alt="img1" src="/img/gallery/img6.jpg" />
          </a>
          <a href="https://vladislavkiselov.github.io/Concrete-Jungle/img/gallery/img7.jpg">
            <img alt="img1" src="/img/gallery/img7.jpg" />
          </a>
          <a href="https://vladislavkiselov.github.io/Concrete-Jungle/img/gallery/img8.jpg">
            <img alt="img1" src="/img/gallery/img8.jpg" />
          </a>
          <a href="https://vladislavkiselov.github.io/Concrete-Jungle/img/gallery/img9.jpg">
            <img alt="img1" src="/img/gallery/img9.jpg" />
          </a>
        </LightGallery>
      </div>
    </section>;
}
