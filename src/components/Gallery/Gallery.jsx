import React from "react";
import team1 from "../images/team/team1.jpg";
import team2 from "../images/team/team2.jpg";
import team3 from "../images/team/team3.jpg";
// import team1 from "../images/team/team1.jpg";
// import mountain2 from "../images/mountain/mountain2.jpg";
// import mountain3 from "../images/mountain/mountain3.jpg";
// import mountain4 from "../images/mountain/mountain4.jpg";

const Gallery = () => {
  const images = [team1, team2, team3];
  return (
    <div className="grid grid-cols-team bg-blue-950">
      {images.map((img, i) => (
        <div key={i} className="cursor-pointer hover:opacity-50">
          <img
            className="w-full h-[16rem] 2xl:h-[22rem] object-cover"
            src={img}
            alt="galleryImg"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
