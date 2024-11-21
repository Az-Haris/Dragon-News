import { IoBookmarksOutline } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, author, image_url, details, total_view, rating,  } = news;
    return (
        <div className='rounded-md border border-[#E7E7E7]'>
            <div className='p-5 bg-[#F3F3F3] flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <img className='w-12 rounded-full' src={author.img} alt="" />
                    <div>
                        <h4>{author.name}</h4>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <button><IoBookmarksOutline /></button>
                    <button><IoMdShare /></button>
                </div>
            </div>
            <div className='p-5 '>
                <h2>{title}</h2>
                <img className="mt-5 mb-7 rounded-md" src={image_url} alt={title} />
                <p>{details}</p>
                <Link className="text-[#FF8C47]">Read More</Link>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object
};

export default NewsCard;