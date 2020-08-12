import React from "react";
import Button from "../General/Button";
import css from "./style.module.css";

const OrderSummary = props => {
  return (
    <div className={css.OrderSummary}>
      <h3>Таны захиалга</h3>
      <p>Таны сонгосон орцууд:</p>
      <ul>
        {Object.keys(props.ingredients).map(el => (
          <li key={el}>
            {props.INGREDIENT_MNNAMES[el]}: {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>
        <strong>Захиалгын дүн: {props.totalPrice}₮</strong>
      </p>
      <p>Цаашаа үргэжлүүлэх үү ?</p>
      <Button clicked={props.onClose} btnType="Danger" text="Цуцлах" />
      <Button clicked={props.onContinue} btnType="Success" text="Үргэжлүүлэх" />
    </div>
  );
};

export default OrderSummary;
