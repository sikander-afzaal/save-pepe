const Roadmap = () => {
  return (
    <div className="wrapper py-[60px]  sm:py-[120px]">
      <div className="contain justify-center xl:flex-row flex-col items-center xl:items-stretch gap-6 xl:gap-10">
        <RoadmapBox
          title={
            <>
              SPEPE <br className="xl:block hidden" /> protocol
            </>
          }
          desc="First Lego built on top of SPEPE Protocol"
        />
        <RoadmapBox
          title="The Banker NFT collection"
          desc="The Banker NFT Collection launch"
          classes="xl:relative top-10"
        />
        <RoadmapBox
          classes="-top-10 xl:relative"
          title="MemeFi Development"
          desc="More rewards for holders independent of SPEPE trade volume"
        />
      </div>
    </div>
  );
};

export default Roadmap;

const RoadmapBox = ({ title, desc, classes }) => {
  return (
    <div
      className={`overflow-hidden xl:w-auto w-full  max-w-[472px] rounded-2xl greenBorder ${classes}`}
    >
      <div className="bg-greenGr flex justify-start items-start h-full flex-col gap-1 py-8 px-5 sm:p-[32px] ">
        <h3 className="text-white  uppercase font-bold text-3xl 2xl:text-[48px] leading-[1.25]">
          {title}
        </h3>
        <p className="text-white  text-xl font-comic">{desc}</p>
      </div>
    </div>
  );
};
