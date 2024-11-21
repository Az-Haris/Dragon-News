import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-[#F3F3F3] p-3 my-5">
      <p className="bg-[#D72050] text-white px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true}  speed={100}>
        <div className="space-x-10">
          <Link to={"/auth"}>Lorem</Link>
          <Link to={"/auth"}>Lorem</Link>
          <Link to={"/auth"}>Lorem</Link>
          <Link to={"/auth"}>Lorem</Link>
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
