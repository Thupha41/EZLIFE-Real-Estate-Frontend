/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogItem = ({
  blogID,
  title,
  description,
  authorName,
  date,
  thumbnail,
}) => {
  return (
    <article className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="relative aspect-video sm:aspect-[4/3] md:aspect-video lg:aspect-[4/3] xl:aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
        <Link to={`/blogs/${blogID}`}>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 hover:text-primary transition-colors duration-200 mb-2 line-clamp-2">
            {title}
          </h3>
        </Link>
        <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 gap-1">
          <span className="truncate">By {authorName}</span>
          <span className="text-gray-500">{date}</span>
        </div>
        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 flex-grow">
          {description}
        </p>
        <Link
          to={`/blogs/${blogID}`}
          className="text-xs sm:text-sm text-primary hover:text-primary-dark font-medium hover:underline transition-colors duration-200 inline-flex items-center gap-1"
        >
          Read more
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogItem;
