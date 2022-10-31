import React, { FC } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/slices/modalSlice";
import { Data } from "./data";
import { RootState } from "../store";
import { FaShoppingBag, FaExpand } from "react-icons/fa";
import css from "../styles/SingleItem.module.css";
import { storeActions } from "../store/slices/storeSlice";

const SingleItem: FC = ({ id, name, image, price }: Data) => {
  const { cart } = useSelector((state: RootState) => state.store);
  const inCart = cart.find((item: Data) => item.id === id);
  const dispatch = useDispatch();
  const { openModal } = modalActions;
  const { addToCart } = storeActions;

  return (
    <article className={css.product}>
      <div className={css.imgContainer}>
        <Image src={image} width={352} height={300} alt={name} />
        <div className={css.hoverContainer}></div>
      </div>
      <div className={css.productFooter}>
        <div className={css.productDetails}>
          <p>{name}</p>
          <p>${price}</p>
        </div>

        <div className={css.btnContainer}>
          <button
            onClick={() => {
              if (!inCart) {
                dispatch(openModal());
                dispatch(addToCart({ id }));
              }
            }}
          >
            {inCart ? (
              "In Cart"
            ) : (
              <>
                <i>
                  <FaShoppingBag />
                </i>
                Add To Cart
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};

export default SingleItem;
