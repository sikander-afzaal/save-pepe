const Hero = () => {
  return (
    <section className="wrapper pt-[130px] lg:pt-[200px] relative pb-[80px] bg-hero bg-left-top bg-cover bg-no-repeat">
      <div className="bg-main blur-[450px] rounded-full w-full max-w-[457px] aspect-square absolute top-0 left-0 -translate-y-1/2 -z-10"></div>
      <div className="contain flex-col items-start justify-start gap-10">
        <div className="flex lg:flex-row flex-col lg:text-left text-center justify-between items-center gap-2 w-full">
          <h2 className="text-[30px] sm:text-[40px] xl:text-[60px] 2xl:text-[80px] uppercase leading-[1.25] font-bold text-white">
            BSC's first <span className="text-main">multi-currency</span>{" "}
            <br className="sm:block hidden" />
            rewards token
          </h2>
          <div className="flex justify-start items-end flex-col">
            <button className="bg-fill bg-btn bg-no-repeat rounded-full w-[250px] h-[60px] text-black text-2xl font-bold">
              Buy on BSC
            </button>
            <img
              src="/arrow.png"
              className="w-[30px] xl:w-[60px] object-contain translate-x-1/2"
              alt=""
            />
          </div>
        </div>
        <img
          src="/hero-img.png"
          className="sm:mt-0 -mt-4 w-full object-contain"
          alt=""
        />
        <h2 className="text-[30px] sm:text-[40px] 2xl:text-[64px] text-center self-center uppercase leading-[1.25] font-bold text-white">
          Build a diverse portfolio with{" "}
          <span className="text-main">$SPEPE</span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
