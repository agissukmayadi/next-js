import CardAnime from "./CardAnime";

const AnimeList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const anime = await response.json();

  return (
    <div className=" grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2   gap-3  items-stretch px-3 pb-5">
      {anime.data.map((data: any) => (
        <CardAnime key={data.mal_id} data={data}></CardAnime>
      ))}
    </div>
  );
};

export default AnimeList;
