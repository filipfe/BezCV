import { ProfessionColorScheme } from "../../../constants/professionColorMap";

export default function EmailIcon({
  startColor,
  stopColor,
}: ProfessionColorScheme) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.25 0.75H3.75C2.7558 0.751191 1.80267 1.14666 1.09966 1.84966C0.396661 2.55267 0.00119089 3.5058 0 4.5L0 13.5C0.00119089 14.4942 0.396661 15.4473 1.09966 16.1503C1.80267 16.8533 2.7558 17.2488 3.75 17.25H14.25C15.2442 17.2488 16.1973 16.8533 16.9003 16.1503C17.6033 15.4473 17.9988 14.4942 18 13.5V4.5C17.9988 3.5058 17.6033 2.55267 16.9003 1.84966C16.1973 1.14666 15.2442 0.751191 14.25 0.75ZM3.75 2.25H14.25C14.6991 2.25088 15.1376 2.38614 15.5092 2.63835C15.8808 2.89057 16.1684 3.24821 16.335 3.66525L10.5915 9.4095C10.1688 9.83049 9.59656 10.0669 9 10.0669C8.40344 10.0669 7.83118 9.83049 7.4085 9.4095L1.665 3.66525C1.83161 3.24821 2.11921 2.89057 2.49079 2.63835C2.86236 2.38614 3.30091 2.25088 3.75 2.25ZM14.25 15.75H3.75C3.15326 15.75 2.58097 15.5129 2.15901 15.091C1.73705 14.669 1.5 14.0967 1.5 13.5V5.625L6.348 10.47C7.05197 11.1722 8.00569 11.5665 9 11.5665C9.99431 11.5665 10.948 11.1722 11.652 10.47L16.5 5.625V13.5C16.5 14.0967 16.2629 14.669 15.841 15.091C15.419 15.5129 14.8467 15.75 14.25 15.75Z"
        fill="url(#paint0_linear_1586_1613)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1586_1613"
          x1="9"
          y1="0.75"
          x2="9"
          y2="17.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={startColor.value} offset={startColor.position} />
          <stop stopColor={stopColor.value} offset={stopColor.position} />
        </linearGradient>
      </defs>
    </svg>
  );
}
