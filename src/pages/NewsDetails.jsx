import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightAside from "../components/RightAside";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  const { title, details, image_url } = news;
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="container mx-auto grid grid-cols-12 gap-5 mt-5">
        <section className="col-span-9 mb-10">
          <p className="font-semibold mb-5">Dragon News</p>
          <div className="rounded-md border border-[#E7E7E7]">
            <div className="p-5 ">
              <img className="mb-7 w-full rounded-md" src={image_url} alt="" />
              <h2 className="text-2xl text-gray-700 font-bold">{title}</h2>
              <p className="text-gray-500 mt-5">{details}</p>
              <Link
                className="bg-[#D72050] px-5 py-3 mt-5 rounded-md text-white inline-flex items-center gap-2"
                to={`/category/${news?.category_id}`}
              >
                <FaArrowLeft /> <span>All news in this category</span>
              </Link>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
