import AnimeList from "@/components/AnimeList";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const topAnime = await response.json();
  return (
    <>
      <div className=" flex justify-between items-center  p-3">
        <h1 className=" md:text-lg font-bold">Popular Anime</h1>

        <Link
          href="/popular"
          className=" md:text-lg underline hover:text-indigo-500 transition-all"
        >
          Lihat Semua
        </Link>
      </div>
      <AnimeList api={topAnime}></AnimeList>
    </>
  );
}
