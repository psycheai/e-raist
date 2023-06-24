import React from 'react';
import Image from "next/image";
import Link from 'next/link';
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
            <img src="/img/img1.jpg" alt="Image 1" />
            <img src="/img/img2.jpg" alt="Image 2" />
            <img src="/img/img3.jpg" alt="Image 3" />
            <img src="/img/img4.jpg" alt="Image 4" />
            <img src="/img/img5.jpg" alt="Image 5" />
            <img src="/img/img6.jpg" alt="Image 6" />
            <img src="/img/img7.jpg" alt="Image 7" />
            <img src="/img/img8.jpg" alt="Image 8" />
            <img src="/img/img9.jpg" alt="Image 9" />
            <img src="/img/img10.jpg" alt="Image 10"/>
            <img src="/img/img11.jpg" alt="Image 11"/>
            <img src="/img/img12.jpg" alt="Image 12"/>
            <img src="/img/img13.jpg" alt="Image 13"/>
            <img src="/img/img14.jpg" alt="Image 14" />
    {/* Add more image elements as needed */}
  </div>


           </div>
         <div className="box3">
          
            <Link href="/table-of-contents">
              <div className="explore-link">Explore Our Journey</div>
            </Link>
           <span className="arrow">&#10148;</span>
          </div>
         </div>
        </div>
      </div>
    
  );
};

export default HomePage;

