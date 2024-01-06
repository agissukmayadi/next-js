import AnimeList from "@/components/AnimeList";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
      <AnimeList></AnimeList>
    </>
  );
}
