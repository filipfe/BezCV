import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { countUpUnderline } from "../../../assets/home/employer/employer";

const abilities = [
  "Organizacja czasu pracy",
  "Podzielność uwagi",
  "Asertywność",
  "Pewność siebie",
  "Charyzma",
  "Skrupulatność i dokładność",
  "Adaptacja i elastyczność",
  "Pozytywne nastawienie",
  "Umiejętność rozwiązywania problemów",
  "Cierpliwość",
  "Uważność",
  "Efektywne słuchanie",
  "Prezencja",
  "Empatia",
  "Otwartość na problemy innych",
  "Opiekuńczość",
  "Lojalność i dyskrecja",
  "Wysoka kultura osobista",
  "Nadawanie priorytetów",
  "Umiejętność pracy pod presją czasu",
  "Umiejętności komunikacyjne",
  "Znajomość programów niezbędnych do pracy",
];

export default function Banner() {
  const [iteration, setIteration] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!iteration || !sliderRef.current) return;
    sliderRef.current.classList.remove("abilities-slider");
    sliderRef.current.classList.add("abilities-slider");
  }, [iteration]);

  return (
    <section className="sm:px-[8vw] md:px-[12vw] 2xl:px-[16vw] pt-[1in] md:pt-[1.4in] 2xl:pt-[1.8in] items-center relative">
      <div className="font-bold flex flex-col gap-4 bg-primary sm:rounded-3xl px-10 overflow relative xl:px-20 py-8 xl:py-16 text-white">
        <h2 className="text-3xl leading-tight xl:text-[2.5rem] xl:leading-tight relative">
          W bezCV jest ponad{" "}
          <div className="inline-block relative text-4xl xl:text-5xl leading-tight">
            <CountUp enableScrollSpy useEasing end={500} />
            <img
              className="absolute left-0 bottom-1 w-full"
              src={countUpUnderline}
              alt=""
            />
          </div>
          <br className="hidden sm:block" /> kandydatów do pracy
        </h2>
        <p className="font-normal text-[rgba(255,255,255,0.8)] text-sm xl:text-base mb-6 max-w-[6in] leading-relaxed">
          wyselekcjonowanych w oparciu o podstawowe informacje, preferencje
          zawodowe oraz 21 kompetencji miękkich
        </p>
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            onTransitionEnd={() => setIteration((prev) => prev + 1)}
            className="abilities-slider flex items-center gap-4 w-max"
          >
            {abilities.map((ab) => (
              <Ability ability={ab} key={ab} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Ability = ({ ability }: { ability: string }) => {
  return (
    <div className="py-4 px-6 text-white min-w-max flex-1 text-sm font-medium bg-[#599EF7] rounded-full">
      {ability}
    </div>
  );
};
