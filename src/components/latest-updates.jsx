// import axios from "axios";
// import { useEffect, useState } from "react";//using hooks

// // Fetching the news using axios md5

// const LatestUpdates = () => {
//   const [article, setArticle] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [show, setShow] = useState(false); // Add this line
//   const [visibleCards, setVisibleCards] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => setShow(true), 2000);
//     return () => clearTimeout(timer);//mene api kaha dala tha?
//   }, []);
//   //here we are fecthing the data in real time in this file only
//   useEffect(() => {
//   if (!loading && article.length > 0) {
//     let i = 0;
//     const interval = setInterval(() => {
//       setVisibleCards((prev) => {
//         if (prev < article.length) return prev + 1;
//         clearInterval(interval);
//         return prev;
//       });
//       i++;
//     }, 300); // delay between each card (0.8s)
//     return () => clearInterval(interval);
//   }
// }, [loading, article]);


//   useEffect(() => {
//     const fetcharticle = async () => {
//       try {
//         const res = await axios.get("https://newsapi.org/v2/everything", {
//           params: {
//             q: "marvel cinematic universe OR avengers",
//             language: "en",
//             sortBy: "publishedAt",
//             apiKey: "2b2ef38f8a2644be865ce92abd45f9ff",
//           },
//         });

//         setArticle(res.data.articles);
//       } catch (error) {
//         console.error("Failed to fetch Marvel news:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetcharticle();
//   }, []);

//   //Displaying the news
//   if (loading) {
//     return <p className="text-center text-sm md:text-lg mt-10">📰 Loading Marvel news...</p>;
//   }
//   return (
//     <div className={`text-xl top-40 absolute m-3 md:m-10 `}>
//       <div className="grid gap-5 h-168 md:h-150 md:w-380 overflow-auto scrollbar-hide">
//         {article.slice(0, 6).map((article, index) => (
//           <div
//             key={index}
//             className={`rounded-xl p-5 backdrop-brightness-150 text-black transition-all duration-400 transform shadow-2xl ${
//       visibleCards > index
//         ? "-translate-x-0 opacity-100"
//         : "translate-x-10 opacity-0"
//     }`}
//     style={{
//       transitionDelay: `${index * 0.2}s`, // stagger delay
//     }}>
//             <h2 className="text-lg md:text-xl font-semibold ">{article.title}</h2>
//             <p className="text-lg md:text-sm text-gray-500 mb-2 ">
//               {new Date(article.publishedAt).toLocaleDateString()}
//             </p>
//             <p className="mb-3">{article.description}</p>
//             <a
//               href={article.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-800 hover:underline"
//             >
//               →
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestUpdates;
// // import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await axios.get("/api/getNews?q=Marvel");
        setArticles(res.data.results || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    fetchNews();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Marvel Movie News</h1>
      <ul className="mt-4">
        {articles.map((article, index) => (
          <li key={index} className="mb-3">
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-600">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

