import React, { FC } from "react";
import css from "../styles/Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={css.footerContainer}>
      <p>Developed by Daniel Dunsin</p>
    </footer>
  );
};

export default Footer;
