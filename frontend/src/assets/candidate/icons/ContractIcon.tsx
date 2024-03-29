import { ProfessionColorScheme } from "../../../constants/professionColorMap";

const ContractIcon = ({ startColor, stopColor }: ProfessionColorScheme) => {
  return (
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.39453 3.69824V2.1328C5.39453 1.50977 5.9043 1 6.52734 1H12.418C13.0411 1 13.5508 1.50977 13.5508 2.1328V3.69824"
        stroke="url(#paint0_linear_2318_4322)"
        stroke-width="1.5"
        stroke-miterlimit="22.9256"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.2422 8.76074V14.7637C17.2422 15.3436 16.7675 15.8184 16.1875 15.8184H2.75781C2.17784 15.8184 1.70312 15.3438 1.70312 14.7637V8.7959"
        stroke="url(#paint1_linear_2318_4322)"
        stroke-width="1.5"
        stroke-miterlimit="22.9256"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.06641 10.5361C4.34726 10.3235 1 9.25996 1 7.3456V4.84961C1 4.26872 1.47377 3.79492 2.05469 3.79492H16.8906C17.4715 3.79492 17.9453 4.26876 17.9453 4.84961V7.3456C17.9453 9.27195 14.5558 10.3368 10.8086 10.54"
        stroke="url(#paint2_linear_2318_4322)"
        stroke-width="1.5"
        stroke-miterlimit="22.9256"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.17188 9.49023H10.7734V10.7031C10.7734 11.3702 10.2276 11.916 9.56055 11.916H9.38477C8.71768 11.916 8.17188 11.3702 8.17188 10.7031V9.49023Z"
        stroke="url(#paint3_linear_2318_4322)"
        stroke-width="1.5"
        stroke-miterlimit="22.9256"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2318_4322"
          x1="9.47266"
          y1="1"
          x2="9.47266"
          y2="3.69824"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={startColor.value} offset={startColor.position} />
          <stop stopColor={stopColor.value} offset={stopColor.position} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2318_4322"
          x1="9.47266"
          y1="8.76074"
          x2="9.47266"
          y2="15.8184"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={startColor.value} offset={startColor.position} />
          <stop stopColor={stopColor.value} offset={stopColor.position} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2318_4322"
          x1="9.47266"
          y1="3.79492"
          x2="9.47266"
          y2="10.54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={startColor.value} offset={startColor.position} />
          <stop stopColor={stopColor.value} offset={stopColor.position} />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2318_4322"
          x1="9.47266"
          y1="9.49023"
          x2="9.47266"
          y2="11.916"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={startColor.value} offset={startColor.position} />
          <stop stopColor={stopColor.value} offset={stopColor.position} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ContractIcon;
