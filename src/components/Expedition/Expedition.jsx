import  { useLayoutEffect, useRef } from "react";
import logo from "../images/logo.png";
import cloud from "../images/cloud.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Blog from "../Blog/Blog";

const Expedition = () => {
  const contentRef = useRef("");
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const animate = gsap.timeline({
      scrollTrigger: {
        trigger: ".about1",
        start: "top top",
        endTrigger: contentRef?.current,
        end: "bottom center",
        toggleClass: { targets: ".about1", className: "active" },
      },
    });
    animate.from(contentRef?.current, { duration: 1 });
  }, []);

  return (
    <section ref={contentRef} className="overflow-hidden">
      <div
        className="bg-mountain w-full h-[550px] 2xl:h-[900px] bg-no-repeat bg-cover bg-center
        lg:mt-28 flex items-end justify-center relative overflow-hidden md:overflow-visible">
        <div className="text-white pb-2 text-center absolute bottom-6 md:bottom-0 !z-50 py-[7rem]">
          <img
            className="w-[8rem] md:w-[12rem] 2xl:w-[16rem] mx-auto"
            src={logo}
            alt="logoImg"
          />
          <h1 className="text-3xl 2xl:text-6xl font-bold capitalize py-4">
            Ous Servises
          </h1>
          <p className="px-6 lg:w-[60rem] 2xl:w-[85rem] mx-auto text-sm md:text-base 2xl:text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
            eligendi maiores. Eius sint laboriosam quo porro minus libero eos
            perspiciatis? Fuga, veniam corporis consectetur culpa qui quasi
            rerum dicta iste at nulla harum blanditiis sed laborum laboriosam
            commodi deserunt maiores beatae. Et, architecto similique numquam
            ipsam amet incidunt corporis iusto? perspiciatis? Fuga, veniam
            corporis consectetur culpa qui quasi rerum dicta iste at nulla harum
            blanditiis sed laborum laboriosam commodi deserunt maiores beatae.
            Et, architecto similique numquam ipsam amet incidunt corporis iusto?
            ipsam amet incidunt corporis iusto?
          </p>
        </div>
        {Array(14)
          .fill()
          .map((_, i) => (
            <img
              className="absolute right-0 left-0 bottom-[-3rem] sm:bottom-[-6rem] md:bottom-[-9rem]
                2xl:bottom-[-15rem]"
              key={i}
              src={cloud}
              alt="cloudImg"
              style={{ animation: `cloud ${i + 15}s linear infinite` }}
            />
          ))}
      </div>
      <Blog />
    </section>
  );
};

export default Expedition;
