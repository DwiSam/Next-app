import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <FileSearch size={52} className="text-color-accent gap-4" />
        <h1 className="text-color-accent">NOT FOUND</h1>
        <Link
          href="/"
          className="text-color-white hover:text-color-accent transition-all"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Page;
