import Gallery from "./components/gallery/Gallery";
import Hero from "./components/hero/Hero";
import Locations from "@/components/user/locations/Locations";

const LevelOnePage = ({ data }) => {
  return (
    <section className="levelOnePage">
      <Hero data={data} />

      {data?.locations && (
        <Locations
          title={data.locations.title}
          locations={data.locations.items}
        />
      )}

      <Gallery data={data} />
    </section>
  );
};

export default LevelOnePage;