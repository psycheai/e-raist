import React from 'react';
import Link from 'next/link';

const Buttons = () => {
  return (
    <div className="button-container">
      <Link href="#contents" passHref>
        <button className="box3">
          Table of contents
        </button>
      </Link>
      <Link href="#event-details" passHref>
        <button className="box3">
          Read Magazine
        </button>
      </Link>
      <Link href="#highlights" passHref>
        <button className="box3">
          Greet Us !!
        </button>
      </Link> 
    </div>
  );
};

export default Buttons;
