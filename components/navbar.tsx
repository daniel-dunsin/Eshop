import React, { FC } from "react";
import css from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Link from "next/link";

const Navbar: FC = () => {
  const { total } = useSelector((state: RootState) => state.store);
  return (
    <nav className={css.navbarContainer}>
      <div>
        <div className={css.navbarBrand}>
          <Link href="/">
            <h1>E-Shop</h1>
          </Link>
        </div>
        <div className={css.navbarButtonContainer}>
          <Link href="/cart">
            <button>
              Cart <span>{total}</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
