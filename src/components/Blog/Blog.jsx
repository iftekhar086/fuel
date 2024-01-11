// import blog1 from "../images/blogs/blog1.jpg";
// import blog2 from "../images/blogs/blog2.jpg";
// import blog3 from "../images/blogs/blog3.jpg";

const Blog = () => {
  const data = [
    {
      title: "Exploration and Production",
      desc: `Utilizing advanced technologies, we discover and extract petroleum resources to meet global energy demands`,
      // img: blog1,
      path: "#",
    },
    {
      title: "Precious Metals and Gems",
      desc: `Facilitating the buying and selling of gold & Diamond, ensuring secure and transparent transactions in the global market.`,
      // img: blog2,
      path: "#",
    },
    {
      title: "Infrastructure Development",
      desc: `Designing and implementing sustainable and well-integrated urban planning solutions for modern cities and communities.`,
      // img: blog3,
      path: "#",
    },
    {
      title: "Global Trade Network",
      desc: `Facilitating smooth imports and exports across borders, connecting businesses to diverse international markets.`,
      // img: blog3,
      path: "#",
    },
    {
      title: "Corporate Social Responsibility",
      desc: `Initiatives that contribute to the betterment of communities, supporting education, healthcare, and social welfare programs.`,
      // img: blog3,
      path: "#",
    },
    {
      title: "Customer Support",
      desc: `our commitment to exceptional customer support is as unwavering as our dedication to industry excellence.`,
      // img: blog3,
      path: "#",
      
    },
  ];
  return (
    <section
      className="clip2 w-full h-full bg-blogBg bg-no-repeat bg-cover md:mt-[-6rem]
        flex items-center justify-center text-white py-[8rem] !z-50">
      <div className="w-[90%] lg:w-[85%] mx-auto flex flex-wrap gap-5">
        {data.map((blog, i) => (
          <div key={i} className="flex-[100%] md:flex-[25%] md:even:mt-[3rem]">
            {/* <img className="w-full rounded-md" src={blog.img} alt="blogImg" /> */}
            <div className="mt-5">
              <h1 className="text-2xl 2xl:text-4xl pb-3 font-medium capitalize">
                {blog.title}
              </h1>
              <p className="text-sm 2xl:text-xl capitalize">{blog.desc}</p>

              <button
                className="mt-4 bg-slate-600 w-full md:w-auto py-2 px-3 2xl:py-3 
                2xl:px-4 cursor-pointer text-sm hover:bg-slate-400">
                Read More 
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
