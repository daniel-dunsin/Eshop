import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import css from "../styles/Cart.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Data } from "../components/data";
import CartItem from "../components/cartItem";
const Cart: NextPage = () => {
  const { cart, total } = useSelector((state: RootState) => state.store);

  return (
    <main>
      <Head>
        <title>E-Shop Cart</title>
      </Head>
      <section className={css.cartContainer}>
        <header className={css.cartHeader}>
          <h2>Product</h2>
          <h2>Quantity</h2>
          <h2>Price</h2>
        </header>
        <section className={css.cartItemsContainer}>
          {cart.map((item: Data, index: number) => {
            return <CartItem key={index} {...item} />;
          })}
        </section>
        <footer className={css.totalContainer}>
          <h3>Total: </h3>
          <h3>${total}</h3>
        </footer>
      </section>
    </main>
  );
};

export default Cart;
