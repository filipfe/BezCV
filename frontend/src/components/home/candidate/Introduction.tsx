import Control, { Controller } from "react-control-js";
import CountUp from "react-countup";
import { administration, customerService, introductionBg, selling } from "../../../assets/home/candidate/candidate";

interface RoleBox {
    image: string,
    title: string,
    desc: string
}

const roles: RoleBox[] = [
    {
        image: selling,
        title: 'Sprzedaż',
        desc: 'Między innymi: Przedstawiciel Handlowy, Specjalista ds. Sprzedaży, Doradca Klienta, Manager E-commerce, Key Account Manager'
    },
    {
        image: customerService,
        title: 'Obsługa klienta',
        desc: 'Między innymi: Doradca Klienta, Konsultant Infolinii, Specjalista ds. Obsługi Klienta, Specjalista ds. Telemarketingu'
    },
    {
        image: administration,
        title: 'Administracja biurowa',
        desc: 'Między innymi: Specjalista ds. Administracji, Asystent/ka biura, Office Manager, Specjalista ds. Kadr i Płac, Pracownik Obsługi Recepcji'
    },
]

export default function Introduction() {
    return (
        <section className="padding items-center flex flex-col gap-16 relative">
            <img className="absolute left-0 right-0 top-0 -z-10 xl:h-auto h-[5in] w-screen object-cover" src={introductionBg} alt="" />
            <div className="flex flex-wrap gap-8 justify-between items-center text-white py-[1in]">
                <h2 className="text-3xl md:text-4xl font-semibold leading-snug md:leading-snug">W BezCV jest ponad <span className="text-4xl md:text-5xl"><CountUp end={40} enableScrollSpy useEasing /></span><br />zarejestrowanych pracodawców</h2>
                <h2 className="text-xl font-medium">którzy szukają kandydata do pracy w 3 sektorach</h2>
                <Controller opacity={1} onScroll viewPort={0.9} ease='ease-out' stagger={80} className="flex justify-center gap-8 flex-wrap xl:grid grid-cols-3 mt-8">
                    {roles.map(role => <Control element={<RoleBox {...role} key={role.title} />} key={'ctrl' + role.title} />)}
                </Controller>
            </div>
        </section>
    )
}

const RoleBox = ({ title, desc, image }: RoleBox) => {
    return (
        <div className="rounded-xl flex flex-col gap-4 px-8 py-12 bg-white shadow-[0px_24px_61px_rgba(250,172,62,0.15)]">
            <div className="h-14 w-14 flex items-center justify-center rounded bg-[#FFFAF5]">
                <img className="max-w-[60%] max-h-[60%]" src={image} alt="" />
            </div>
            <h3 className="font-semibold text-xl text-font">{title}</h3>
            <p className="text-sm text-[#3C4663]">{desc}</p>
        </div>
    )
}