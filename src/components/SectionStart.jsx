const SectionStart = ({ bg, word }) => {
  return (
    <div className="relative w-full  ">
      <div
        className={`flex ${bg} h-[65px] sm:h-[77px] rotate-[1.5deg] w-full overflow-hidden justify-center items-center gap-5`}
      >
        {Array(60)
          .fill(false)
          .map((elem, idx) => (
            <div
              className="flex justify-center items-center gap-5 min-w-max"
              key={idx + word}
            >
              <div className="w-3 h-3 rounded-full bg-white border-2 border-solid border-black drop-shadow-marqee"></div>
              <p className="text-[36px] text-stroke uppercase font-bold text-white  drop-shadow-marqee">
                {word}
              </p>
            </div>
          ))}
      </div>
      <div
        className={`inline-flex ${bg} h-[65px] sm:h-[77px] absolute top-0 left-0 -z-10 opacity-30 -rotate-[1.5deg] w-full   justify-center items-center gap-5`}
      >
        {Array(60)
          .fill(false)
          .map((elem, idx) => (
            <div
              className="flex justify-center items-center gap-5 min-w-max"
              key={idx + word}
            >
              <div className="w-3 h-3 rounded-full bg-white border-2 border-solid border-black drop-shadow-marqee"></div>
              <p className="text-[36px] text-stroke  uppercase font-bold text-white  drop-shadow-marqee">
                {word}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SectionStart;
