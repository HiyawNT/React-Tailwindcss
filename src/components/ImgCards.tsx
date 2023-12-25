import React from "react";
import home from "../assets/home.jpg";
import home2 from "../assets/hom3.jpg";
import home3 from "../assets/home.jpg";

interface PhotoProps {
  imageSrc: string;
  title: string;
  description: string;
  date: string;
  readTime?: string; // Added readTime property
}

const PhotoCard: React.FC<PhotoProps> = ({
  imageSrc,
  title,
  description,
  date,
  readTime, // Added readTime here
}) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <a href="#"></a>
      <div className="relative">
        <a href="#">
          <img className="w-full" src={imageSrc} alt={title} />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>
        <a href="#!"></a>
        <a href="!#">
          <div className="text-sm absolute top-0 right-0 bg-gray-100 px-4  text-gray-500 rounded-md h-7 w-28 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            <span className="font-bold">{date}</span>
          </div>
        </a>
      </div>
      <div className="px-6 py-4">
        <a
          href="#"
          className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
        >
          {title}
        </a>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <div className="px-6 py-4 flex flex-row items-center">
        <a
          href="#"
          className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
        >
          {/* Use readTime here if needed */}
          {readTime && <span>{readTime}</span>}
        </a>
      </div>
    </div>
  );
};

const ImgCards: React.FC = () => {
  return (
    <section className="bg-gray-200">
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          <PhotoCard
            imageSrc={home}
            title="Modernica Appartment"
            description="2 km away from current location"
            date="Popular"
          />
          <PhotoCard
            imageSrc={home2}
            title="Modernica Appartment"
            description="2 km away from current location"
            date="Discount"
            readTime="5 min" // Example usage of readTime
          />
          <PhotoCard
            imageSrc={home3}
            title="Modernica Appartment"
            description="2 km away from current location"
            date="New Listing"
          />
        </div>
      </div>
    </section>
  );
};

export default ImgCards;
