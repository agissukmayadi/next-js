import CardAnime from "./CardAnime";

const AnimeList = async ({api} : any) => {

  return (
    <div className=" grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2   gap-3  items-stretch px-3 pb-5">
      {api.data.map((anime: any) => (
        <CardAnime key={anime.mal_id} data={anime}></CardAnime>
      ))}
    </div>
  );
};

export default AnimeList;
