import Albums from "./HomeSections/Albums";
import ArtistsSection from "./HomeSections/ArtistsSection";
import FeaturedPlaylists from "./HomeSections/FeaturedPlaylists";
import Recommendations from "./HomeSections/Recommendations";

const HomePage = () => {
  return (
    <>
      <ArtistsSection />
      <FeaturedPlaylists />
      <Recommendations />
      <Albums />
    </>
  );
};

export default HomePage;
