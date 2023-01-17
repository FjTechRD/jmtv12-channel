import React from "react";
import "./styles/live.css";

const Live = () => {
  return (
    <main className="live__page">
      <section className="main_bg-live">
        <div className="streaming-box">
          <h3>JMTv Canal 12 En Vivo!</h3>
          <iframe
            className="streaming-video"
            width="380"
            height="215"
            src="https://www.youtube.com/embed/Fox2NyJxyfo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Live;
