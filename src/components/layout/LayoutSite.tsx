"use client";
import { ReactNode, useEffect, useState } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useGetMeQuery } from "@/redux/api/me";
import Loader from "@/ui/Loader/Loader";
import SideBar from "./SideBar/SideBar";

const LayoutSite = ({ children }: { children: ReactNode }) => {
  const { status } = useGetMeQuery();

  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    if (status === "fulfilled" || status === "rejected") {
      setTimeout(() => {
        setIsLoad(false);
      }, 100);
    }
  }, [status]);

  if (isLoad) {
    return <Loader />;
  }
  return (
    <div className={scss.LayoutSite}>
      <Header />
      <div className={scss.home}>
        <SideBar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutSite;
