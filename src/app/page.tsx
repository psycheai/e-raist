import React from 'react';
import Image from "next/image";
import schoolLogo from "../../public/logo.png";
import backgroundImg from "../../public/mar.jpg";


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
         <div className="bg-white bg-opacity-20 p-6 sm:p-24 flex flex-col sm:flex-row items-center justify-center rounded-2xl mt-8 container-margin">
            <div className="mb-8 sm:mb-0 sm:mr-8 container-size">
              <Image
                src={schoolLogo}
                alt="School Logo"
                width={400}
                height={400}
              />
            </div>
            <div className="container-size">
              <h1 className="text-center text-4xl sm:text-8xl font-Forum text-golden">
                GOLDEN
              </h1>
              <h2 className="text-center text-4xl sm:text-8xl font-Forum text-golden">
                JUBILEE
              </h2>
              
              <div className="flex flex-col items-center">
                <hr className="w-2/3 sm:w-full border border-golden my-4" />
                <h3>
                Celebrating 50 Years of Excellence, Memories, and Success
                </h3>
                <hr className="w-2/3 sm:w-full border border-golden my-4" />
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </div>
  );
};

export default HomePage;

