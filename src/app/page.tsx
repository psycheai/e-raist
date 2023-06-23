import React from 'react';
import Image from "next/image";
import schoolLogo from "../../public/logo.png";
import backgroundImg from "../../public/mar.jpg";
import styles from './globals.css';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src={backgroundImg}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="filter brightness-100 "
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-white mt-8">
        <div className={`box ${styles.contentSquare} ml-4`}>
            <div className="mb-8 sm:mb-0 sm:mr-8 container-size">
              <Image
                src={schoolLogo}
                alt="School Logo"
                width={150}
                height={150}
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;

