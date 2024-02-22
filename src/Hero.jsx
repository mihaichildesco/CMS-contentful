import heroImg from "./assets/hero.svg";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Godard jawn meh lyft thundercats. Whatever bicycle rights subway
            tile, organic iceland truffaut fit DIY tousled typewriter hexagon
            poke marfa. Gentrify shaman iceland vinyl tonx, praxis celiac
            narwhal godard crucifix. Praxis hoodie godard, post-ironic viral
            neutra cardigan iPhone.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="" className="img" />
        </div>
      </div>
    </section>
  );
};
