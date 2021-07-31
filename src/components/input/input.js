import React from "react";
//styles
import styles from "./input.module.scss";

const Input = ({
	inputText,
	type,
	onChange,
	htmlFor,
	id,
	labelName,
	value,
	placeholder,
	onSubmit,
	autocomplete,
}) => {
	return (
		<label className={styles["label-default"]} htmlFor={htmlFor}>
			{labelName}
			<input
				className={styles["input-default"]}
				id={id}
				type={type}
				onChange={onChange}
				value={value}
				placeholder={placeholder}
			></input>
		</label>
	);
};

export default Input;
