import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../modal/modal";
import styles from "./stacking.module.scss";

const Stacking = ({
	contextState,
	selectedArea,
	stackData,
	copyText,
	finalData,
}) => {
	const { register, handleSubmit } = useForm();
	const [isOpen, setIsOpen] = useState(false);

	const onSubmit = (formData) => {
		return stackData(formData);
	};

	return (
		<div className={styles["stacking"]}>
			<form className={styles["category"]} onSubmit={handleSubmit(onSubmit)}>
				<h3>Waiting Calls</h3>
				<div>
					<input type="number" placeholder="Amber 1" {...register("amber1")} />
					<label htmlFor="amber1Wait">Waiting for:</label>
					<input
						type="time"
						placeholder="Time Waiting"
						{...register("amber1Wait", {})}
					/>
				</div>
				<div>
					<input type="number" placeholder="Amber 2" {...register("amber2")} />
					<label htmlFor="amber2Wait">Waiting for:</label>
					<input
						type="time"
						placeholder="Time Waiting"
						{...register("amber2Wait", {})}
					/>
				</div>
				<div>
					<input placeholder="Green 2" type="number" {...register("green2")} />
					<label htmlFor="green2Wait">Waiting for:</label>
					<input
						type="time"
						placeholder="Time Waiting"
						{...register("green2Wait", {})}
					/>
				</div>
				<div>
					<input type="number" placeholder="Green 3" {...register("green3")} />
					<label htmlFor="green3Wait">Waiting for:</label>
					<input
						type="time"
						placeholder="Time Waiting"
						{...register("green3Wait", {})}
					/>
				</div>
				<h3>Hospital Delays</h3>
				<div className={styles["hospitals"]}>
					<div>
						<label>MORR</label>
						<input
							type="checkbox"
							defaultValue={"Delays At Morriston"}
							{...register(`delays`)}
						/>
					</div>
					<div>
						<label>SING</label>
						<input
							type="checkbox"
							defaultValue={"Delays At Singleton"}
							{...register(`delays`)}
						/>
					</div>
					<div>
						{" "}
						<label>PHIL</label>
						<input
							type="checkbox"
							defaultValue={"Delays At Phil"}
							{...register(`delays`)}
						/>
					</div>
					<div>
						<label>WWGH</label>
						<input
							type="checkbox"
							defaultValue={"Delays At West Wales General"}
							{...register(`delays`)}
						/>
					</div>
					<div>
						<label>WITH</label>
						<input
							type="checkbox"
							defaultValue={"Delays At Withybush"}
							{...register(`delays`)}
						/>
					</div>
					<div>
						<label>BRON</label>
						<input
							type="checkbox"
							defaultValue={"Delays At Bronglais"}
							{...register(`delays`)}
						/>
					</div>
					<div>
						<label>RSHS</label>
						<input
							type="checkbox"
							defaultValue={"Delays At Royal Shrewsbury"}
							{...register(`delays`)}
						/>
					</div>
					<div>
						<label>POWB</label>
						<input
							type="checkbox"
							defaultValue={"Delays At Princess Of Wales Bridgend"}
							{...register(`delays`)}
						/>
					</div>
					<div>
						<label>RGHL</label>
						<input
							type="checkbox"
							defaultValue={"Delays At Royal Glam"}
							{...register(`delays`)}
						/>
					</div>
					<div>
						<label>HCH</label>
						<input
							type="checkbox"
							defaultValue={"Delays At Hereford County"}
							{...register(`delays`)}
						/>
					</div>
				</div>

				<h3>Any other info</h3>
				<div className={styles["free-type"]}>
					<textarea {...register("otherInfo", { maxLength: 1000 })} />
				</div>
				<div className={styles["submit"]}>
					<input type="submit" onClick={() => setIsOpen(!isOpen)} />
				</div>
			</form>
			<Modal onClose={() => setIsOpen(!isOpen)} isModalOpen={isOpen}>
				{finalData}
			</Modal>
		</div>
	);
};

export default Stacking;
