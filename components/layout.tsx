import React, { FC, ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

type layoutType = {
  children: ReactNode;
};

const Layout: FC<layoutType> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
