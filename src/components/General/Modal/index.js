import React from 'react';
import css from './style.module.css';

const Modal = (props) => {
    return (
        <div
            style={{
                transform: props.show
                    ? 'translateY(0)'
                    : 'translateY(-100vh)',
                opacity: props.show
                    ? '1'
                    : '0'
            }}
            onClick={props.hideConfirmModal}
            className={css.Modal}>{props.children}</div>
    )
};
export default Modal;