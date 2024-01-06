import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className=" flex flex-col md:flex-row md:justify-between md:items-center gap-2 px-3 py-4 shadow-sm bg-indigo-800">
      <Link href="/" className=" text-white font-bold tracking-widest">
        CUYANIMELIST
      </Link>
      <div className="flex w-full max-w-sm items-center">
        <Input type="text" placeholder="Search" className=" rounded-tr-none rounded-br-none border border-white/50 placeholder:text-white/50 focus-visible:ring-0 focus-visible:border-white caret-white"  />
        <Button type="submit" className=" rounded-tl-none rounded-bl-none">Search</Button>
      </div>
    </nav>
  );
}
