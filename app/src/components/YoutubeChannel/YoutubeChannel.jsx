import React from "react";
import "./YoutubeChannel.scss";

export default function YoutubeChannel() {
  return <section className="section_youtube container">
      <h2>Наш you-tube канал</h2>
      <div className="box_video">
        <iframe src="https://www.youtube.com/embed/ATRAMsPagcU?si=QKoKn9zsDuNr5gtc" title="YouTube video" allowfullscreen />
      </div>
    </section>;
}
