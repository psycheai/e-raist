// Import necessary dependencies and images
import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';
import backgroundImg from "../../public/table.jpg";

const TableOfContentsPage = () => {
  const router = useRouter();

  // Function to handle navigation to the "Explore Our Journey" page
  const handleExploreJourney = () => {
    router.push('/explore');
  };

  return (
    <div className="table-of-contents-container">
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
          <li><a href="#how-we-started">How We Started</a></li>
          <li><a href="#notable-achievements">Notable Achievements</a></li>
          <li><a href="#messages">Messages</a></li>
          <li><a href="#alumni-stories">Alumni Stories</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#memories">Memories</a></li>
          <li><a href="#articles">Articles</a></li>
          <li><a href="#conclusion">Conclusion</a></li>
        </ul>
        <button className="explore-button" onClick={handleExploreJourney}>
          Explore Our Journey
        </button>
      </div>
    </div>
  );
};

export default TableOfContentsPage;
