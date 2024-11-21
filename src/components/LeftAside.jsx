import { useEffect, useState } from "react";

const LeftAside = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data.data.news_category))
    },[])
    console.log(categories)
    return (
        <div>
            <p className="font-semibold mb-5">All Category ({categories.length})</p>
            <div className="flex flex-col gap-3">
                {
                    categories.map(category=> <button key={category.category_id} className="btn">{category.category_name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftAside;