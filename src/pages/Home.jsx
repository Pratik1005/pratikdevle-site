import {NavMenu} from "../components/NavMenu";
import {HeroText} from "../components/HeroText";
import {Project} from "../components/Project";
import {Footer} from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <NavMenu />
      <HeroText />
      <Project />
      <section>
        <h2 className="section-title">Blogs</h2>
      </section>
      <Footer />
    </div>
  );
};
