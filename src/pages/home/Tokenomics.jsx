const Tokenomics = () => {
  return (
    <div className="wrapper py-[60px] bg-tokenomic bg-cover bg-no-repeat sm:py-[100px]">
      <div className="contain xl:flex-row flex-col justify-between items-center xl:items-start gap-10">
        <div className="flex justify-start items-center  xl:items-start flex-col gap-8">
          <h3 className="text-white leading-[1.25] text-[26px] sm:text-[40px] text-center xl:text-left 2xl:text-[58px] font-bold">
            Ticker: <span className="text-main">$SPEPE</span> <br />
            Total Supply: 50,000,000,000
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-2">
            <ChartKey
              color="bg-[#369336]"
              desc="Vested 1y 6m cliff"
              title="Public Sale"
            />
            <ChartKey
              color="bg-[#EFFF42]"
              desc="Vested 2y 3m cliff"
              title="Ecosystem grant"
            />
            <ChartKey
              color="bg-[#54B434]"
              desc="Vested 2m 3m cliff"
              title="Treasury Fund"
            />
            <ChartKey
              color="bg-[#F3FF70]"
              desc="Vested 2m 6m cliff"
              title="Team"
            />
            <ChartKey color="bg-[#83CD47]" title="Marketing" />
            <ChartKey color="bg-[#84FF70]" desc="Locked 9m" title="LP" />
          </div>
          <div className="overflow-hidden sm:w-auto w-full rounded-2xl greenBorder">
            <div className="flex sm:flex-row flex-col p-[32px] justify-center items-center gap-5 sm:gap-10 bg-greenGr">
              <p className="text-2xl 2xl:text-[36px] font-bold text-white uppercase">
                7% BUY TAX
              </p>
              <div className="h-[2px] sm:h-[45px] bg-greenBorder w-full sm:w-[2px]"></div>
              <p className="text-2xl 2xl:text-[36px] font-bold text-white uppercase">
                7% Sell TAX
              </p>
            </div>
          </div>
        </div>
        <img
          src="/chart.png"
          className="w-full max-w-[550px] object-contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default Tokenomics;

const ChartKey = ({ color, title, desc }) => {
  return (
    <div className="flex justify-start items-center gap-5">
      <div
        className={`border-[3px] w-10 h-10 border-solid border-white ${color} `}
      ></div>
      <div>
        <h3 className="text-white  leading-[1] font-bold text-[28px] ">
          {title}
        </h3>
        {desc && <p className="text-white mt-1 font-comic">{desc}</p>}
      </div>
    </div>
  );
};
