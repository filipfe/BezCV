import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../main";
import {
  initialProfileData,
  ProfileDataContext,
  ProfileDataType,
} from "../constants/profile";
import Stats from "../components/profile/Stats";
import Purchased from "../components/profile/purchased/List";
import Followed from "../components/profile/followed/List";
import { bcvToken } from "../assets/general";
import { Link } from "react-router-dom";
import EmployerInfo from "../components/profile/EmployerInfo";
import { logout } from "../providers/login";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Profile() {
  useDocumentTitle("Profil | bezCV - innowacyjny portal pracy");
  const dispatch = useAppDispatch();
  const [profileData, setProfileData] =
    useState<ProfileDataType>(initialProfileData);
  const [loading, setLoading] = useState(true);
  const auth = useAppSelector((state) => state.login);
  const { id } = auth.data;
  const { access, refresh } = auth.tokens;

  const handleLogout = async () => {
    const resp = await axios.post("/api/logout", refresh, {
      headers: { "Content-Type": "application/json" },
    });
    if (resp.status === 200) dispatch(logout());
  };

  const setFollowed = (userId: number) => {
    setProfileData((prev) => ({
      ...prev,
      followed_contacts: prev.followed_contacts.filter((u) => u.id !== userId),
    }));
  };

  useEffect(() => {
    axios
      .get("/api/profile/" + id, {
        headers: {
          Authorization: "Bearer " + access,
        },
      })
      .then((res) => setProfileData(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="sm:px-[8vw] md:px-[12vw] 2xl:px-[17vw] py-[1.4in] md:py-[1.8in] 2xl:py-[2.2in] flex flex-col gap-8 xl:grid grid-cols-[6fr_5fr_5fr] overflow-x-hidden grid-rows-[4in_max-content_max-content]">
      <EmployerInfo />
      <Link
        to="/punkty"
        className="rounded-full bg-primary ml-[8vw] sm:ml-0 row-[2/3] col-[2/3] max-w-max justify-center xl:max-w-none w-full text-white text-[.8rem] font-semibold flex items-center py-4 px-10"
      >
        Wykup tokeny{" "}
        <img className="max-h-[1.2em] ml-2" src={bcvToken} alt="" />
      </Link>
      <ProfileDataContext.Provider value={profileData}>
        <Stats {...profileData.stats} loading={loading} />
        <Purchased
          purchased={profileData.purchased_contacts}
          loading={loading}
        />
        <Followed
          followed={profileData.followed_contacts}
          setFollowed={setFollowed}
          loading={loading}
        />
      </ProfileDataContext.Provider>
      <button
        className="font-medium w-max ml-[8vw] sm:ml-0 transition-colors text-negative hover:text-darkNegative"
        onClick={handleLogout}
      >
        Wyloguj się
      </button>
    </section>
  );
}
