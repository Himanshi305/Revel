// src/components/MarvelComics.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import md5 from "crypto-js/md5";

export default function MarvelComics() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchComics = async () => {
      try {
        setLoading(true);
        const ts = Date.now().toString();
        const publicKey = `d1005e4759cdb44e91d0c5860f6919ae`;
        const privateKey = `ba60782f6d6427e2776d8fc2de3855240d37e94d`;
        const hash = md5(ts + privateKey + publicKey).toString();

        const res = await axios.get(
          "https://gateway.marvel.com/v1/public/comics",
          {
            params: {
              ts,
              apikey: `d1005e4759cdb44e91d0c5860f6919ae`,
              hash,
              orderBy: "-onsaleDate",
              limit: 10,
            },
          }
        );

        setComics(res.data.data.results);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch Marvel comics.");
      } finally {
        setLoading(false);
      }
    };

    fetchComics();
  }, []);

  if (loading) return <p className="text-gray-500">Loading comics...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="absolute p-2 bottom-0 top-1/4 left-0 right-0 w-10/12 h-10/12 bg-opacity-80 backdrop-blur-md shadow-lg rounded-lg mx-auto overflow-scroll scrollbar-hide">
      <ul className="space-y-4">
        {comics.map((comic) => (
          <li key={comic.id} className="border-b pb-2">
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              className="w-32 mb-2"
            />
            <h3 className="font-semibold left-1/2">{comic.title}</h3>
            <p className="text-sm text-gray-600">
              {comic.dates.find((d) => d.type === "onsaleDate")?.date}
            </p>
            <p className="text-sm">{comic.description || "No description."}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
