import React from 'react';
import Image from "next/image";
import schoolLogo from "../../public/logo.png";
import backgroundImg from "../../public/mar.jpg";
import styles from './globals.css';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        <div className="image">
          <Image
            src={backgroundImg}
            alt="Background Image"
            layout='fill'           
            objectFit="cover"
            />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-white mt-8">
        <div className={`box ${styles.contentSquare} ml-4`}>
            <div className="mb-8 sm:mb-0 sm:mr-8 container-size">
              <Image
                src={schoolLogo}
                alt="School Logo"
                width={130}
                height={130}
              />
            </div>
            <div className="container-size">
              <h1 className="h1">
                WELCOME TO OUR SCHOOLS 
              </h1>
              <h2 className="h2">
                50TH ANNIVERSARY E-MAGAZINE
              </h2>
              
              <div className="flex flex-col items-center">
                
                <h3 className="h3">
                Celebrating 50 Years of Excellence, Memories, and Success
                </h3>
               
               </div>
              </div>
             </div>
           <div className="box2">
           <div className="image-container">
            <img src="/img1.jpg" alt="Image 1" />
            <img src="/img2.jpg" alt="Image 2" />
            <img src="/img3.jpg" alt="Image 3" />
            <img src="/img4.jpg" alt="Image 4" />
            <img src="/img5.jpg" alt="Image 5" />
            <img src="/img6.jpg" alt="Image 6" />
            <img src="/img7.jpg" alt="Image 7" />
            <img src="/img8.jpg" alt="Image 8" />
    {/* Add more image elements as needed */}
  </div>


           </div>
         <div className="box3">
          <div className="explore-journey">
           <span className="explore-text">Explore Our Journey</span>
           <span className="arrow">&#10148;</span>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

