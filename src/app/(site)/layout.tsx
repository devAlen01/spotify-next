import LayoutSide from "@/components/layout/LayoutSide";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <LayoutSide>{children}</LayoutSide>
    </>
  );
};

export default layout;
