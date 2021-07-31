import React, { useState, useContext } from "react";
import Nav from "../components/nav/nav";
import Stacking from "../components/stacking/stacking";
import { AdolContext } from "../context";
import { areas } from "../misc/data";
//styles
import styles from "./home.module.scss";

const Home = () => {
	const divisionalArea = useContext(AdolContext);
	const [stackData, setStackData] = useState();
	let selectedArea = divisionalArea.data.map((el) => el);
	console.log(stackData);

	const displayOutPutFormData = () => {
		if (stackData) {
			return (
				<div id="output" className={styles["form-output"]}>
					<p>{selectedArea[4]?.highlighted}</p>
					{stackData.amber1 === isNaN ? (
						""
					) : (
						<p>
							There are {stackData?.amber1} Amber 1 calls waiting, longest wait
							is {stackData.amber1Wait}
						</p>
					)}
					<p>
						There are {stackData?.amber2} Amber 2 calls waiting, longest wait is{" "}
						{stackData.amber2Wait}
					</p>
					<p>
						There are {stackData?.green2} Green 2 calls waiting, longest wait is{" "}
						{stackData.green2Wait}
					</p>
					<p>
						There are {stackData?.green3} Green 3 calls waiting, , longest wait
						is {stackData.green3Wait}
					</p>
					{stackData.delays !== false ? (
						<p>
							There are delays at: {stackData.delays.map((el) => `${el}. `)}
						</p>
					) : null}
					<p>{stackData.otherInfo}</p>
				</div>
			);
		}
	};

	return (
		<section className={styles["home-container"]}>
			<Nav area={areas} />
			<div className={styles["area"]}>
				<p>{selectedArea[4]?.highlighted}</p>
			</div>
			<div className={styles["stacking-calls"]}>
				{selectedArea[4]?.highlighted !== undefined ? (
					<Stacking
						contextState={divisionalArea}
						selectedArea={selectedArea}
						stackData={setStackData}
						finalData={displayOutPutFormData()}
					/>
				) : null}
			</div>
		</section>
	);
};

export default Home;
