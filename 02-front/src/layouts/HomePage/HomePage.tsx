import {Carousel} from "./components/Carousel";
import {ExploreTopBooks} from "./components/ExploreTopBooks";
import {Heros} from "./components/Heroes";
import {LibraryServicies} from "./components/LibraryServicies";

export const HomePage = () => {
  return (
    <>
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServicies />
    </>
  );
};
