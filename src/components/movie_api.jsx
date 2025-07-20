import axios from 'axios'; 

const API_KEY = '30bba8feef94851ff0f7d653e7a20b82';
const details_url = `https://api.themoviedb.org/3/person`;
const IMAGE_BASE   = "https://image.tmdb.org/3/t/p/w500"; 
const characterToId = {
  IronMan:      3223,     // Robert Downey Jr. :contentReference[oaicite:0]{index=0}
  CaptainAmerica: 16828,  // Chris Evans :contentReference[oaicite:1]{index=1}
  Thor:         74568,    // Chris Hemsworth :contentReference[oaicite:2]{index=2}
  Hulk:         103,      // Mark Ruffalo :contentReference[oaicite:3]{index=3}
  BlackWidow:   1245,     // Scarlett Johansson :contentReference[oaicite:4]{index=4}
  Hawkeye:      17604,    // Jeremy Renner :contentReference[oaicite:5]{index=5}
  WarMachine:   1896,     // Don Cheadle :contentReference[oaicite:6]{index=6}
  AntMan:       22226,    // Paul Rudd :contentReference[oaicite:7]{index=7}
  BlackPanthar: 172069,   // Chadwick Boseman :contentReference[oaicite:8]{index=8}
  SpiderMan:    1136406,  // Tom Holland :contentReference[oaicite:9]{index=9}
  DoctorStrange: 71580,   // Benedict Cumberbatch :contentReference[oaicite:10]{index=10}
  ScarletWitch: 550843,   // Elizabeth Olsen :contentReference[oaicite:11]{index=11}
  Vision:       6162,     // Paul Bettany :contentReference[oaicite:12]{index=12}
  Falcon:       53650,    // Anthony Mackie :contentReference[oaicite:13]{index=13}
  WinterSoldier:60898,    // Sebastian Stan :contentReference[oaicite:14]{index=14}
  Loki:         91606,    // Tom Hiddleston :contentReference[oaicite:15]{index=15}
};
const knownMarvelMovies = [
  "Iron Man",
  "The Incredible Hulk",
  "Iron Man 2",
  "Thor",
  "Captain America: The First Avenger",
  "The Avengers",
  "Iron Man 3",
  "Thor: The Dark World",
  "Captain America: The Winter Soldier",
  "Guardians of the Galaxy",
  "Avengers: Age of Ultron",
  "Ant-Man",
  "Captain America: Civil War",
  "Doctor Strange",
  "Guardians of the Galaxy Vol. 2",
  "Spider-Man: Homecoming",
  "Thor: Ragnarok",
  "Black Panther",
  "Avengers: Infinity War",
  "Ant-Man and the Wasp",
  "Captain Marvel",
  "Avengers: Endgame",
  "Spider-Man: Far From Home",
  "Eternals",
  "Shang-Chi and the Legend of the Ten Rings",
  "Doctor Strange in the Multiverse of Madness",
  "Thor: Love and Thunder",
  "Black Panther: Wakanda Forever",
  "Ant-Man and the Wasp: Quantumania",
  "Guardians of the Galaxy Vol. 3",
  // Add more if needed// 
];

export const fetchCharacterData = async (characterName) => {
  const formattedName = characterName.replace(/_/g, "");
  const id = characterToId[formattedName];
  if (!id) {
    return { bio: "Character not found", movies: [] };
  }
  try {
    const [detailsRes, creditsRes] = await Promise.all([
      axios.get(`${details_url}/${id}?api_key=${API_KEY}`),
      axios.get(`${details_url}/${id}/movie_credits?api_key=${API_KEY}`),
    ]);

    
    const movies = creditsRes.data.cast
      .filter(movie => knownMarvelMovies.includes(movie.title))
      .map((m) => ({
        title: m.title,
        posterUrl: m.poster_path
          ? `${IMAGE_BASE}${m.poster_path}`
          : null
       }));

    return { movies };
  } catch (error) {
    console.error("Error fetching character data:", error);
    return { bio: "Info not found", movies: [] };
  }
};

