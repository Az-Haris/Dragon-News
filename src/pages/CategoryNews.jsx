import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const data = useLoaderData();
    const news = data.data;
    return (
        <div>
            <p className="font-semibold mb-5">Dragon News Home</p>
            <div className="space-y-10">
                {
                    news.map(singleNews=> <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;