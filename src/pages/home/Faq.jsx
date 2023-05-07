import FaqBtn from "../../components/FaqBtn";

const Faq = () => {
  const DATA = [
    {
      question: "What is PEPE Finance ($SPEPE)?",
      answer:
        "PEPE Finance is a multi-currency and multi-chain reward token. By buying and holding $SPEPE you are farming rewards and accumulating tokens supported by the PEPE Finance protocol. These tokens are researched and reviewed by our crypto analysts.",
    },
    {
      question: "What is the benefit of holding $SPEPE?",
      answer:
        "By simply holding $SPEPE, the Hamachi Finance protocol will distribute rewards by the platform directly to you.",
    },
    {
      question: "How do I get my rewards?",
      answer:
        "You'll be airdropped your rewards once you're first in queue. You can choose to enable Manual Claim or even 'GO PEPE', this turns your rewards into $SPEPE.",
    },
    {
      question: "How are rewards generated?",
      answer:
        "Each buy and sell will be taxed 7%, which will only be used to buy tokens and redistribute to $SPEPE holders as rewards and provide liquidity to $SPEPE LP. (% tax subject to change).",
    },
    {
      question: "How do projects benefit from $SPEPE?",
      answer:
        "Projects benefit from $SPEPE by gaining exposure and increased unique holders who may not have ever heard of your project.",
    },
    {
      question: "Which tokens will be farmed?",
      answer:
        "To begin, $SPEPE will begin farming tokens on Binance  Smart  Chain with plans to go cross-chain and multi-chain to farm additional tokens. With our revolutionary technology we are going to bring mass exposure and rewards to holders via Hamachi Finance.",
    },
    {
      question: "What chains do you plan on expanding?",
      answer:
        "We are exploring all the chains starting with L2s and side-chains. (Optimism, Avalanche, Binance  Smart  Chain Smart Chain, Pulsechain, and more)",
    },
    {
      question: "Tokenomics",
      answer: "Scroll up",
    },
  ];
  return (
    <section
      id="faq"
      className="wrapper py-[60px] bg-faq bg-cover bg-no-repeat sm:py-[100px]"
    >
      <div className="contain justify-center">
        <div className="flex w-full justify-start max-w-[1035px] items-start flex-col gap-5 mt-5">
          {DATA.map((elem, idx) => {
            return <FaqBtn {...elem} key={idx + elem.question} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
