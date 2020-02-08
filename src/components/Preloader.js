import React, { useState } from "react";
import stonks from "../images/stonks.jpg";

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  setTimeout(() => {
    setShowPreloader(false);
  }, 5000);

  if (showPreloader) {
    return (
      <div className="Preloader">
        <div className="content">
          <img className="stonks" src={stonks} alt="stonks" />
          <div className="progress">
            <div className="bar"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default Preloader;
