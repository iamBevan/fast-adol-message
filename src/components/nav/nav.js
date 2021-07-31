import React, { useContext } from "react";
import { AdolContext } from "../../context";
import { areas } from "../../misc/data";
//components
import Button from "../button/button";
//styles
import styles from "./nav.module.scss";

const Nav = ({ area }) => {
	const { setData } = useContext(AdolContext);

	return (
		<nav>
			<div className={styles["button-container"]}>
				{area.map((newArea) => {
					return (
						<Button
							btnText={newArea.locality.name}
							onClick={() =>
								setData([...areas, { highlighted: newArea.locality.name }])
							}
							key={newArea.locality.name}
						/>
					);
				})}
			</div>
		</nav>
	);
};

export default Nav;
