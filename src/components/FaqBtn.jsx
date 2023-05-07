import { useEffect, useRef, useState } from "react";
import $ from "jquery";

const FaqBtn = ({ question, answer }) => {
  const answerRef = useRef();
  const [active, setActive] = useState(false);

  useEffect(() => {
    $(answerRef.current).slideUp();
  }, []);

  useEffect(() => {
    if (active) $(answerRef.current).slideDown();
    else $(answerRef.current).slideUp();
  }, [active]);

  return (
    <div className="flex  justify-start overflow-hidden items-start flex-col w-full">
      <div className="w-full  overflow-hidden greenBorder">
        <button
          onClick={() => setActive((prev) => !prev)}
          className="flex bg-greenGr rounded-2xl  text-left gap-4 justify-between items-center px-8  min-h-[75px] w-full"
        >
          <h4 className="text-lg lg:text-2xl text-white">{question}</h4>
          <img
            src="/arrow-faq.png"
            className={`w-6 lg:w-[35px] mix-blend-multiply opacity-75 object-contain transition-all duration-300 ${
              active ? "rotate-180" : "rotate-0"
            }`}
            alt=""
          />
        </button>
      </div>
      <div
        className={`flex justify-start items-start px-3  flex-col duration-500 ${
          active ? " py-5 " : " p-0"
        }`}
      >
        <p ref={answerRef} className="font-comic text-base text-white">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqBtn;
