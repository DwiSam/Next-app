import AnimeList from "@/components/AnimeList";
import MangaList from "@/components/MangaList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await response.json();

  const response2 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=8`
  );
  const topManga = await response2.json();

  return (
    <>
      <section>
        <Header
          title="Anime Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        />
        <AnimeList api={topAnime} />
      </section>

      <section>
        <Header
          title="Manga Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        />
        <MangaList api={topManga} />
      </section>
    </>
  );
};

export default Page;
