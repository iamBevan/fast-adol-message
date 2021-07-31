import React from 'react'
//styles
import styles from "./button.module.scss"

const Button = ({btnText, onClick, type}) => {
    return (
        <button type={type} onClick={onClick} className={styles["default-button"]}>
            {btnText}
        </button>
    )
}

export default Button
