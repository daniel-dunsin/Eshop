import React, { FC } from "react";
import Image from "next/image";
import { Data } from "./data";
import css from "../styles/CartItem.module.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { storeActions } from "../store/slices/storeSlice";
const CartItem: FC<Data> = ({ id, name, image, total, amount, price }) => {
  const dispatch = useDispatch();
  const { increase, decrease, remove } = storeActions;
  return (
    <article className={css.cartItem}>
      <div className={css.cartItemDetails}>
        <div className={css.imgContainer}>
          <Image src={image} width={70} height={70} alt="" />
        </div>
        <div>
          <h5>{name}</h5>
          <small
            className={css.removeBtn}
            onClick={() => {
              dispatch(remove({ id }));
            }}
          >
            remove
          </small>
        </div>
      </div>

      <div className={css.amountContainer}>
        <span
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <FaChevronUp />
        </span>
        <p>{amount}</p>
        <span
          onClick={() => {
            amount == 1 ? dispatch(remove({ id })) : dispatch(decrease({ id }));
          }}
        >
          <FaChevronDown />
        </span>
      </div>

      <div className={css.priceContainer}>
        <p>${price}</p>
      </div>
    </article>
  );
};

export default CartItem;
