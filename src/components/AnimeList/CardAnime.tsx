import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
export default function CardAnime({ data }: any) {
  return (
    <div className="bg-indigo-600 hover:bg-indigo-700 flex flex-col shadow-md shadow-black rounded-md transition-all duration-300 text-white">
      <Link href={`/${data.mal_id}`}>
        <AspectRatio ratio={1 / 1.5} className="hover:cursor-pointer">
          <Image
            src={data.images.webp.image_url}
            alt="..."
            fill
            className=" object-cover hover:scale-[102%] transition-all duration-300 rounded-t-md"
            sizes="100"
            priority
          ></Image>
        </AspectRatio>
      </Link>
      <Link href={`/${data.mal_id}`} className="p-5">
        <h2 className="font-semibold">{data.title}</h2>
        <p className="font-light text-sm">{data.synopsis.substring(0, 150)}...</p>
      </Link>
      <div className="p-5 mt-auto">ACTION</div>
    </div>
  );
}
