import React from "react";
import rants from "../json/rants.json";
import { CiHeart } from "react-icons/ci";
function Hero() {
  return (
    <main className="hero">
      <div className="hero-container">
        <h2>“Unfiltered Tech Thoughts, Straight from the Stack.”</h2>
      </div>
      <section className="rants">
        {rants.map((rant, index) => (
          <div className="rant" key={index}>
            <img src={rant.image} alt={rant.title} />
            <article>
              <h3>{rant.title}</h3>
              <h4>{rant.description}</h4>

              <audio controls>
                <source src={rant.audio} type="audio/mpeg" />
              </audio>
            </article>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Hero;
