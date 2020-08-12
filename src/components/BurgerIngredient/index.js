import React from 'react';
import css from './style.module.css';

const BurgerIngredient = (props) => {
    switch(props.type){
        case 'bread-top': return (
                <div className={css.breadTop}>
                     <div className={css.seed}></div>
                     <div className={`${css.seed} ${css.second}`}></div>
                     <div className={`${css.seed} ${css.third}`}></div>
                     <div className={`${css.seed} ${css.fourth}`}></div>  
                </div>  
        );
        case 'salad': return <div className={css.salad}></div>
        case 'bacon': return <div className={css.bacon}></div>
        case 'meat': return <div className={css.meat}></div>
        case 'cheese': return <div className={css.cheese}></div>
        case 'bread-bottom': return <div className={css.breadBottom}></div>
    }
    return <div>{props.type}</div>
};
export default BurgerIngredient;