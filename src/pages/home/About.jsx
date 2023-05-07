const About = () => {
  return (
    <section className="wrapper py-[60px] sm:py-[100px] relative">
      <div className="contain flex-col justify-start items-center gap-8">
        <div className="flex justify-between items-center xl:items-start gap-6 xl:gap-10 xl:flex-row flex-col text-center xl:text-left">
          <h2 className="text-2xl sm:text-[36px] leading-[1.25] uppercase max-w-[720px] font-bold text-white">
            Picking the next bluechip project is never an easy task, let{" "}
            <span className="text-main">$SPEPE</span> diversify your portfolio
            for you
          </h2>
          <p className="font-comic max-w-[720px] text-lg font-normal text-[#d9dee2]">
            With $SPEPE you will accumulate good projects on multiple chains
            throughout the bear market, just by holding! <br />
            You asked for ARBI season, we're here to ignite it. Be a part of the
            most exciting new community on the chain from the beginning!
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-5 xl:gap-10">
          <AboutBox
            img="/uptodate.png"
            title="Stay up to date"
            desc="Our goal is to become the ultimate community hub on the binance chain. We're an active community and regularly hold AMAs with teams and project updates."
          />
          <AboutBox
            img="/portfolio.png"
            title="Diversify your portfolio"
            desc="Our contract buys the best projects on binance. Trusting the wisdom of the crowd to decide which projects to chose through our governance system."
          />
          <AboutBox
            img="/rewards.png"
            title="Rewards"
            desc="We all know this is why you're here! We dish out a constant stream of rewards by simply holding $SPEPE in your wallet. Passively build positions in a wide variety of projects."
          />
          <AboutBox
            img="/choice.png"
            title="Your Choice!"
            desc="Disagree with the coin we're farming? That's Ok we can't all be on the same page all of the time. Choose to take your rewards in $SPEPE instead by smashing the 'GO $SPEPE' button."
          />
          <AboutBox
            img="/exposure.png"
            title="Exposure"
            desc="We want to help other projects grow. We bring buy volume, market exposure, and additional wallets, something that can be potentially leveraged to benefit our community in the future."
          />
          <AboutBox
            img="/expansion.png"
            title="Expansion"
            desc="$SPEPE Finance will start on binance with plans to go cross-chain and accumulate ERC-20 tokens from additional chains in the future. Details TBA however the OG $SPEPE token will remain the key to accessing future launches."
          />
        </div>
      </div>
    </section>
  );
};

export default About;

const AboutBox = ({ img, title, desc }) => {
  return (
    <div className="relative greenBorder w-full overflow-hidden rounded-[19px]">
      {/* <div className="bg-greenBorder absolute -z-10 rounded-[40px] -inset-[2px]"></div> */}
      <div className="flex sm:flex-row flex-col justify-start relative z-10 bg-greenGr items-center sm:gap-6  p-6 w-full h-full">
        <img
          src={img}
          className="w-[150px] 2xl:w-[200px] object-contain"
          alt=""
        />
        <div className="flex justify-start items-start flex-col gap-2">
          <h3 className="text-white text-[28px] 2xl:text-[36px] font-bold">
            {title}
          </h3>
          <p className="text-white font-comic leading-[1.5]">{desc}</p>
        </div>
      </div>
    </div>
  );
};
