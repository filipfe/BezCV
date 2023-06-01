import CustomLink from "./CustomLink";
import { profileIcon } from "../../assets/profile/profile";
import LogoutButton from "./LogoutButton";
import { useAppSelector } from "../../main";
import { bcvToken } from "../../assets/general";

export default function ProfileMenu() {
  const { points } = useAppSelector((state) => state.login.data);
  return (
    <>
      <CustomLink className="md:ml-2" to="/profil">
        <img className="max-h-[1.1em] mr-2" src={profileIcon} alt="" />
        Mój profil
      </CustomLink>
      <CustomLink className="font-medium flex items-center" to="/profil">
        Ilość{" "}
        <img
          className="max-h-[1em] inline-block"
          src={bcvToken}
          alt="tokenów bCV"
        />
        : {points.toString()}
      </CustomLink>
      <LogoutButton />
    </>
  );
}
