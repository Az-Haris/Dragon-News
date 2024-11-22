import { IoBookmarksOutline } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import StarRatings from "react-star-ratings";

const NewsCard = ({ news }) => {
  const { title, author, image_url, details, total_view, rating } = news;
  const shortDetails = details.substring(0, 280) + "...";
  return (
    <div className="rounded-md border border-[#E7E7E7]">
      <div className="p-5 bg-[#F3F3F3] flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img className="w-12 rounded-full" src={author.img} alt="" />
          <div>
            <h4 className="text-xl font-bold">{author.name}</h4>
            <p className="text-sm text-gray-500">{author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="text-2xl">
            <IoBookmarksOutline />
          </button>
          <button className="text-2xl">
            <IoMdShare />
          </button>
        </div>
      </div>
      <div className="p-5 ">
        <h2 className="text-2xl font-bold">{title}</h2>
        <img className="mt-5 mb-7 rounded-md" src={image_url} alt={title} />
        <p className="text-gray-600">{shortDetails}</p>
        <Link className="text-[#FF8C47]">Read More</Link>
        <hr className="my-5" />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <StarRatings
              rating={rating.number}
              starRatedColor="#FF8C47"
              numberOfStars={5}
              name="rating"
              starDimension="24px"
              starSpacing="2px"
            />
            <p className="text-gray-500 font-bold">{rating.number}</p>
          </div>
          <div className="text-gray-500 flex items-center gap-2">
            <FaEye className="text-xl" />
            <p className="font-bold">{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};

export default NewsCard;
