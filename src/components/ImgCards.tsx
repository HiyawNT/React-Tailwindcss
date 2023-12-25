import React from "react";
import Img1 from "../assets/home.jpg";
import Img2 from "../assets/home2.jpg";
import Img3 from "../assets/home3.jpg";

interface BlogItem {
  imageUrl: string; // Correct the type to string
  title: string;
}

const blogData: BlogItem[] = [
  {
    imageUrl: Img1,
    title: "",
  },
  {
    imageUrl: Img2,
    title: "",
  },
  {
    imageUrl: Img3,
    title: "",
  },
];

const ImgCards: React.FC = () => {
  return (
    <section className="w-full h-full mx-auto px-4 sm:px-6 lg:px-4 mb-12">
      <article>
        <h2 className="text-2xl font-extrabold text-white">BLOG</h2>
        <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 ">
          {blogData.map((item, index) => (
            <BlogArticle
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
            />
          ))}
        </section>
      </article>
    </section>
  );
};

const BlogArticle: React.FC<BlogItem> = ({ imageUrl, title }) => {
  return (
    <article
      className="relative w-96 h-96 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
      <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
        <h3 className="text-center">
          <a className="text-white text-2xl font-bold text-center" href="#">
            <span className="absolute inset-0"></span>
            {title}
          </a>
        </h3>
      </div>
    </article>
  );
};

export default ImgCards;
