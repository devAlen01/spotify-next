import { ReactNode } from "react";
import scss from "./LayoutSide.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const LayoutSide = ({ children }: { children: ReactNode }) => {
  return (
    <div className={scss.LayoutSide}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSide;
