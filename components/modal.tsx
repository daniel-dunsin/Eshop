import React, { FC } from "react";
import css from "../styles/Modal.module.css";
import { modalActions } from "../store/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { ActionDispatch, RootState } from "../store";
import { FaTimesCircle } from "react-icons/fa";

const Modal: FC = () => {
  const { isModalOpen } = useSelector((state: RootState) => state.modal);

  const dispatch: ActionDispatch = useDispatch();
  const { closeModal } = modalActions;
  return (
    isModalOpen && (
      <section className={css.modalOverlay}>
        <div className={css.modal}>
          <i
            className={css.closeIcon}
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            <FaTimesCircle />
          </i>
          <h1>Item Added to Cart</h1>
        </div>
      </section>
    )
  );
};

export default Modal;
