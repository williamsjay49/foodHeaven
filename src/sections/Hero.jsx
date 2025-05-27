import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { foodIconsList } from "../constants";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-50 right-0 z-10">
        <img src="/images/subtract.png" alt="background" />
      </div>
      <div className="hero-layout">
        {/* LEFT HERO CONTENTS */}
        <header className=" flex flex-col justify-center md:w-full w-screen md:px-20 px-5 md:gap-20 gap-7">
          <div className="flex flex-col gap-2">
            <span>Welcome To Sehatno</span>
            <h1>
              Explore the World of{" "}
              <span className="font-semibold text-5xl md:text-6xl text-orange">
                Culinary
              </span>{" "}
              Delights
            </h1>
          </div>

          <Button
            text="Explore Our Menu"
            className="text-dark-primary text-xl font-medium md:w-80 md:h-16 w-60 h-12"
          />
          <div className="flex flex-col md:items-start items-center gap-6">
            <span className="text-light-primary">Special Menu</span>
            <div className="flex w-[500px]  justify-between">
              {foodIconsList.map(({ imgPath, id }) => (
                <img
                  key={id}
                  src={imgPath}
                  alt={`Food Icon ${id + 1}`}
                  className=" object-cover h-[100px] w-[100px] rounded-full hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              ))}
            </div>
          </div>
        </header>

        {/* RIGHT HERO CONTENTS */}
        <figure className="md:basis-7xl flex flex-col justify-center md:items-start md:px-20 px-5 gap-5  w-full h-full min-h-[50vh]">
          <img
            src="/images/1_food.png"
            className="-translate-x-14 h-[580px] w-[580px] object-cover"
            alt="Delicious Food"
          />
          <div className="flex flex-col gap-5">
            {/* Image goes here */}
            <span className="text-light-primary">Lorem Ipsum Dolor</span>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or{" "}
            </p>
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
