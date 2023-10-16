import Image from "next/image";
import Link from "next/link";

const MangaList = ({ api }) => {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 md:gap-y-0 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {api.data.map((manga) => {
          return (
            <div className="group relative">
              <Link href={`/${manga.mal_id}`} className="relative group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src={manga.images.webp.image_url}
                    alt="kosong"
                    width={350}
                    height={350}
                    className="h-full w-full object-cover max-h-64 object-center lg:h-full lg:w-full rounded-xl"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <h3 className="text-xl text-color-white absolute top-1/2 px-3 transform text-center flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {manga.title_japanese}
                  </h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MangaList;
