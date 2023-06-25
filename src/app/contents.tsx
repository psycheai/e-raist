import React from 'react';
import Image from "next/image";
import backgroundImg from "../../public/table.jpg";

const Contents = () => {
  return (
    <div id="contents" className="contents-container">
      <div className="background-image">
        <Image
          src={backgroundImg}
          alt="Background Image"
          layout='fill'
          objectFit="cover"
        />
      </div>
      <div className="table-of-contents">
        <h1>Table of Contents</h1>
        <ul>
          <li><a href="#how-we-started">Deep Prajwalam</a></li>
          <li><a href="#notable-achievements">School Song</a></li>
          <li><a href="#messages">Ganesh Vandana</a></li>
          <li><a href="#alumni-stories">Welcome Address</a></li>
          <li><a href="#timeline">Speech of School Caption</a></li>
          <li><a href="#memories">5 Era Speaking</a></li>
          <li><a href="#articles">Ex P&D</a></li>
          <li><a href="#conclusion">C.Guest + Guest of honor</a></li>
          <li><a href="#messages">V.Chancellor</a></li>
          <li><a href="#messages">Mrs. Sarita Ch. + Ex Raist + Raist</a></li>
          <li><a href="#messages">Dance + Choir</a></li>
          <li><a href="#messages">Hindi Articles</a></li>
          <li><a href="#messages">Vedio clipings  10 mins</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contents;
