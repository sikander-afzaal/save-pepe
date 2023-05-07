import { useEffect, useState } from "react";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  useEffect(() => {
    const setHeaderBgFunc = () => {
      if (window.scrollY > 0) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    };
    window.addEventListener("scroll", setHeaderBgFunc);
    return () => {
      window.removeEventListener("scroll", setHeaderBgFunc);
    };
  }, []);

  return (
    <div
      className={`${
        headerBg ? "bg-body" : "bg-transparent "
      } transition-all duration-300 px-6 lg:px-[60px] wrapper fixed top-0 left-0 z-50 border-b border-solid border-main`}
    >
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="fixed top-0 left-0 z-[88] bg-black bg-opacity-70 w-full h-full lg:hidden block"
        ></div>
      )}
      <div className="flex justify-between items-center w-full h-[90px] lg:h-[120px]">
        <img
          src="/logo.png"
          className="w-[200px] xl:w-[290px] object-contain"
          alt=""
        />
        <nav
          className={`flex justify-start z-[90] lg:justify-center items-center sm:items-start lg:items-center gap-6 xl:gap-[60px] lg:static fixed top-0 ${
            headerToggle ? "right-0" : "-right-full"
          } w-full sm:max-w-[450px] h-full px-[3rem] pt-[6rem] pb-[3rem] overflow-y-auto bg-main lg:w-auto lg:max-w-none transition-all duration-700 lg:h-auto lg:p-0 lg:overflow-y-visible lg:bg-transparent lg:flex-row flex-col`}
        >
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-white font-bold text-xl xl:text-2xl"
          >
            How to Buy
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-white font-bold text-xl xl:text-2xl"
          >
            Litepaper
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-white font-bold text-xl xl:text-2xl"
          >
            Tokenomics
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-white font-bold text-xl xl:text-2xl"
          >
            FAQ
          </a>
          <div className="flex flex-col lg:hidden justify-start items-center sm:items-start gap-6">
            <div className="flex justify-center items-center gap-3">
              <a href="#" target="blank">
                <img
                  src="/telegram.png"
                  className="w-10 object-contain"
                  alt=""
                />
              </a>
              <a href="#" target="blank">
                <img
                  src="/twitter.png"
                  className="w-10 object-contain"
                  alt=""
                />
              </a>
            </div>
            <button className="text-lg font-bold text-black bg-btn rounded-full bg-fill bg-no-repeat w-[120px] h-[40px]">
              Dapp
            </button>
          </div>
        </nav>
        <div className="hidden lg:flex justify-center items-center gap-6">
          <div className="flex justify-center items-center gap-3">
            <a href="#" target="blank">
              <img src="/telegram.png" className="w-10 object-contain" alt="" />
            </a>
            <a href="#" target="blank">
              <img src="/twitter.png" className="w-10 object-contain" alt="" />
            </a>
          </div>
          <button className="text-lg font-bold text-black bg-btn rounded-full bg-fill bg-no-repeat w-[120px] h-[40px]">
            Dapp
          </button>
        </div>
        <button
          className="relative z-[92] lg:hidden text-white block"
          onClick={() => setHeaderToggle((prev) => !prev)}
        >
          {headerToggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
