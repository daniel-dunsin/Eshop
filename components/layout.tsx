import React, { FC, ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Modal from "./modal";

type layoutType = {
  children: ReactNode;
};

const Layout: FC<layoutType> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Modal />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
