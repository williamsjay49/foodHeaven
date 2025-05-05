import Button from "../components/Button";

const Hero = () => {
  return (
    <section>
      <div></div>
      <div>
        {/* LEFT HERO CONTENTS */}
        <header>
          <h2>Welcome To Sehatno</h2>
          <h1>Explore the World of Culinary Delights</h1>
          <Button text="Explore Our Menu" />
          <h2>Special Menu</h2>
        </header>

        {/* RIGHT HERO CONTENTS */}
        <figure>
          <div>
            {/* Image goes here */}
            <h2>Lorem Ipsum Dolor</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or{" "}
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
