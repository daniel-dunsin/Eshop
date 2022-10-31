import React, { FC, useEffect, useCallback } from "react";
import css from "../styles/Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import Link from "next/link";
import { storeActions } from "../store/slices/storeSlice";

const Navbar: FC = () => {
  const { amount, cart } = useSelector((state: RootState) => state.store);
  const dispatch = useDispatch();
  const { getTotals } = storeActions;
  const getTotal = useCallback(()=>{ 
    dispatch(getTotals())
  }, [dispatch, getTotals])
  useEffect(() => {
    getTotal();
  }, [cart, getTotal]);

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
              Cart <span>{amount}</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
