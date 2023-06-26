import React from 'react';
import Image from "next/image";
import backgroundImg from "../../public/mar2.jpg";

const Magazine = () => {
    return (
      <div id="magazine" className="-magazine-container">
        <div id="contents" className="contents-container">
          <div className="background-image">
            <Image
              src={backgroundImg}
              alt="Background Image"
              layout='fill'
              objectFit="cover"
            />
          </div>
          
        </div>
      </div>
    );
  }


export default Magazine;
