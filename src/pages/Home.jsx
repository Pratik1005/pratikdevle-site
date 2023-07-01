import {Link} from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <section className="hero-text">
        <h1>Hi, I'm Pratik</h1>
        <h2>A Frontend Engineer</h2>
        <p>
          I'm passionate about building user interfaces that are engaging,
          accessible and user-centric.
        </p>
      </section>

      <section className="projects">
        <h2 className="section-title">Projects</h2>
      </section>
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
