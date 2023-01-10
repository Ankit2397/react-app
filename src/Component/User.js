import React from "react";
const Image_1 = "https://image-not-found.png";
const Image_2 =
  "https://i.postimg.cc/8CVt73NY/wonderlane-N-As0-VQu7s-unsplash.jpg";
const BrokenImage =
  "https://i.postimg.cc/RZvT9tdr/guerrillabuzz-crypto-pr-Wtol-M5hsj14-unsplash.jpg";
const User = () => {
  const imageOnLoad = (event) => {
    console.log(`Picture successfully ${event.currentTarget.src} loaded.`);
    if (event.currentTarget.className !== "error") {
      event.currentTarget.className = "success";
    }
  };
  const imageOnError = (event) => {
    event.currentTarget.src = BrokenImage;
    event.currentTarget.className = "error";
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6">
          <img
            src={Image_2}
            onLoad={imageOnLoad}
            onError={imageOnError}
            width="255"
            alt="Picture Two"
          />
        </div>
        <div className="col-6">
          <img
            src={Image_1}
            onLoad={imageOnLoad}
            onError={imageOnError}
            width="255"
            alt="Picture One"
          />
        </div>
      </div>
    </div>
  );
};
export default User;