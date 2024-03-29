import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { professionColorMap } from "../../constants/professionColorMap";
import { RoleType } from "../../constants/workForm";

type CircleChartProps = {
  profession: RoleType;
  percentage: number | null;
  isFirst: boolean;
};

const professionTitle = (profession: RoleType): string => {
  switch (profession) {
    case "sales":
      return "sprzedażowe";
    case "office_administration":
      return "administracyjne";
    case "customer_service":
      return "obsługi klienta";
  }
};

export default function CircleChart({
  profession,
  percentage,
  isFirst,
}: CircleChartProps) {
  const circleRef = useRef<HTMLDivElement>(null!);
  const color = professionColorMap[profession].color;
  const title = professionTitle(profession);
  const radius = 155;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);
  const strokeWidth = 30;
  const strokeDasharray = `${circumference} ${circumference}`;
  const isUndefined = percentage == null;

  useEffect(() => {
    if (!percentage) return;
    const offsetValue = circumference - (percentage * circumference) / 100;
    if (!circleRef.current || !percentage) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setOffset(offsetValue);
      }
    });
    observer.observe(circleRef.current);
    return () => {
      observer.disconnect();
    };
  }, [percentage, circleRef.current]);

  return (
    <div
      ref={circleRef}
      className={`${isFirst ? "order-first" : "order-last"} ${
        isUndefined ? "opacity-[0.1] hidden md:flex" : "opacity-1"
      } flex justify-center items-center mx-auto relative rounded-full bg-[#F8F9FB] h-[340px] w-[340px] print:scale-90 min-w-max`}
    >
      <div className="rounded-full h-[280px] w-[280px] bg-white" />
      <div className="absolute top-[22%] bottom-[18%] right-16 left-16 flex flex-col items-center gap-4 print:pl-8">
        <h3 className="flex flex-col items-center text-font relative z-10">
          <small className="font-medium text-[.75rem]">Umiejętności</small>
          <span className="text-lg font-bold">{title}</span>
        </h3>
        <strong
          style={{ color }}
          className={`${
            isUndefined ? "text-base" : "text-[1.75rem]"
          } text-center font-black relative z-10`}
        >
          {isUndefined ? (
            "Nie wypełniono ankiety"
          ) : (
            <CountUp
              enableScrollSpy
              scrollSpyOnce
              suffix="%"
              useEasing
              end={percentage}
            />
          )}
        </strong>
        <div className="absolute inset-0 bg-[#F8F9FB] rounded-full flex flex-col items-center text-center justify-end py-7">
          <div className="bg-white absolute top-0 left-0 right-0 bottom-[40%]" />
          {!isUndefined && (
            <p className="font-medium w-full max-w-[2in] text-[.8rem] text-font">
              w oparciu o{" "}
              <strong>
                {profession === "customer_service"
                  ? "16"
                  : profession === "office_administration"
                  ? "14"
                  : "11"}{" "}
                kompetencji miękkich
              </strong>
            </p>
          )}
        </div>
      </div>
      <svg
        className="absolute left-0 top-0 rotate-90"
        xmlns="https://www.w3.org/2000/svg"
        version="1.1"
        width={340}
        height={340}
      >
        <circle
          className="circle-chart"
          cx={170}
          cy={170}
          r={155}
          strokeWidth={strokeWidth}
          stroke={color}
          opacity={isUndefined ? 0.1 : 1}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={offset}
          fill="none"
          style={{
            transition: "stroke-dashoffset 2s ease-in-out",
          }}
        />
      </svg>
    </div>
  );
}
