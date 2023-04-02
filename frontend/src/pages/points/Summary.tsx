import { Link, useSearchParams } from "react-router-dom";
import FilledButton from "../../components/FilledButton";
import InvoiceInfo from "../../components/points/InvoiceInfo";
import BuyerInfo from "../../components/points/BuyerInfo";
import {
  PaymentDataType,
  initialPaymentData,
  packages,
} from "../../constants/points";
import OrderInfo from "../../components/points/OrderInfo";
import { useMemo, useState } from "react";
import {
  PaymentContext,
  PaymentContextType,
} from "../../context/PaymentContext";
import { useAppSelector } from "../../main";

export default function Summary() {
  const { first_name, last_name, email, phone, nip } = useAppSelector(
    (state) => state.login.data
  );
  const [paymentData, setPaymentData] = useState<PaymentDataType>({
    ...initialPaymentData,
    full_name: `${first_name} ${last_name}`,
    email,
    phone,
    nip,
  });
  const [searchParams] = useSearchParams();
  const searchParamPoints = searchParams.get("points") || "";
  const foundPackage = packages.find(
    (p) => p.points === parseInt(searchParamPoints)
  );

  if (!foundPackage) return <NotFound />;

  const contextValue = useMemo<PaymentContextType>(
    () => ({
      paymentData,
      setPaymentData,
    }),
    [paymentData, setPaymentData]
  );

  return (
    <section className="padding pt-[1.4in] pb-[.7in] 2xl:pb-[.9in] flex flex-col xl:grid grid-cols-[1fr_1px_1fr_1px_1fr] items-center xl:items-start gap-16 2xl:pt-[1.8in] bg-white min-h-screen">
      <PaymentContext.Provider value={contextValue}>
        <BuyerInfo />
        <div className="h-[1px] w-full bg-[#EDEDED] xl:h-full self-stretch" />
        <InvoiceInfo />
        <div className="h-[1px] w-full bg-[#EDEDED] xl:h-full self-stretch" />
        <OrderInfo {...foundPackage} />
      </PaymentContext.Provider>
    </section>
  );
}

const NotFound = () => {
  return (
    <div className="padding pt-[1.4in] pb-[.7in] 2xl:pb-[.9in] flex flex-col items-center gap-4 2xl:pt-[1.8in]">
      <h2 className="font-semibold text-xl md:text-2xl text-center">
        Nie znaleziono!
      </h2>
      <p className="text-center text-[#3C4663] jakarta font-medium text-sm max-w-[5in]">
        Pakiet punktów, którego szukałeś nie został znaleziony, spróbuj wykupić
        jeden z pakietów dostępnych w naszej ofercie!
      </p>
      <Link to="/punkty">
        <FilledButton>Kup punkty</FilledButton>
      </Link>
    </div>
  );
};
