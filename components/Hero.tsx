import SearchBox from "./SearchBox";

export const Hero = () => {
  return (
    <section className="pt-24 pb-12 xl:py-0 xl:h-[1087px] bg-hero2 xl:bg-hero bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <div className="container mx-auto justify-center items-center flex xl:justify-start">
        <SearchBox />
      </div>
    </section>
  );
};
