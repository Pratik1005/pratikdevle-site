import {NavMenu} from "../components/NavMenu";
import {HeroText} from "../components/HeroText";
import {Project} from "../components/Project";

export const Home = () => {
  return (
    <div>
      <NavMenu />
      <HeroText />
      <Project />
      <section>
        <h2 className="section-title">Blogs</h2>
      </section>
      <section>
        <h3>Have a great Saturday!</h3>
      </section>
      <footer>footer links</footer>
    </div>
  );
};
