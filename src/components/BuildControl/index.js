import React from 'react';
import css from './style.module.css';

export const BuildControl = props => (
    <div className={css.BuildControl}>
        <div className={css.Label}>{props.orts}</div>
        <button className={css.Less} onClick={() => props.ortsNemeh(props.type)}>Нэмэх</button>
        <button
            disabled={props.disabled[props.type]}
            className={css.More}
            onClick={() => props.ortsHasah(props.type)}>Хасах</button>
    </div>
);
