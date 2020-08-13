import React from "react";
import { BuildControl } from "../BuildControl";
import css from "./style.module.css";

const BuildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <p>Бургерийн үнэ: {props.price}</p>
      {Object.keys(props.INGREDIENT_MNNAMES).map((el) => (
        <BuildControl
          key={el}
          ortsNemeh={props.ortsNemeh}
          ortsHasah={props.ortsHasah}
          disabled={props.disabledIngredients}
          type={el}
          orts={props.INGREDIENT_MNNAMES[el]}
        />
      ))}
      ;
      <button
        onClick={props.showConfirmModal}
        disabled={props.disabled}
        className={css.orderButton}
      >
        Захиалах
      </button>
    </div>
  );
};

export default BuildControls;
