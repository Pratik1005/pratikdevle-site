import {NavMenu} from "../components/NavMenu";
import {HeroText} from "../components/HeroText";
import {Project} from "../components/Project";
import {Footer} from "../components/Footer";
import {Blog} from "../components/Blog";

export const Home = () => {
  return (
    <div>
      <NavMenu />
      <HeroText />
      <Project />
      <Blog />
      <Footer />
    </div>
  );
};
