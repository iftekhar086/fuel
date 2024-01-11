const About = () => {
  return (
    <section className="py-[3rem] z-[-1] about1">
      <div className="text-center">
        <span
          className="relative text-center text-3xl 2xl:text-5xl before:content-['']
          before:absolute before:h-[6rem] before:border-2 before:border-blue-950 before:top-[-3rem]
          before:right-[4rem] before:bottom-24 before:my-auto about 2xl:before:right-[6.5rem]
        "
        >
          About Us
        </span>
      </div>
      <div
        className="w-[90%] lg:w-[85%] mx-auto flex flex-col md:flex-row gap-5 mt-10
        text-center md:text-left text-sm 2xl:text-xl"
      >
        <div className="flex-1 flex flex-col gap-2">
          <p>
            Welcome to Swiston International, a premier Dubai-based
            international business company that redefines the landscape of
            global imports & exports With a robust presence in multiple sectors
            including infrastructure development, petroleum, gold & diamond
            industry. We are your trusted partner in expanding horizons and
            unlocking opportunities worldwide.
          </p>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sit
            corrupti itaque aut cumque, reiciendis rem, voluptatum voluptates
            in, expedita quibusdam minima!
          </p> */}
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <p>
          Welcome to Swiston International, a premier Dubai-based
            international business company that redefines the landscape of
            global imports & exports With a robust presence in multiple sectors
            including infrastructure development, petroleum, gold & diamond
            industry. We are your trusted partner in expanding horizons and
            unlocking opportunities worldwide.
          </p>

          <div>
            <button className="bg-blue-950 text-white py-2 px-5 hover:bg-blue-800 text-sm">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
