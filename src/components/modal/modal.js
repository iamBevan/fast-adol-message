import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";
import styles from "./modal.module.scss";

const modalRoot = document.body;

const Modal = ({ children, isModalOpen, innerRef, onClose }) => {
	const container = useRef(document.createElement("div"));

	const currentContainer = container.current;
	useEffect(() => {
		if (isModalOpen) {
			modalRoot.appendChild(currentContainer);
		}

		return () => {
			currentContainer.parentNode?.removeChild(currentContainer);
		};
	}, [currentContainer, isModalOpen]);

	const Wrapper = () => {
		return (
			<>
				{isModalOpen && (
					<FocusLock>
						<div
							className={styles["container"]}
							ref={innerRef}
							data-testid="modal"
						>
							<div className={styles["container__body"]}>
								<div className={styles["children"]}>{children}</div>
								<button className={styles["close-btn"]} onClick={onClose}>
									Close
								</button>
								{/* <button className={styles["copy-btn"]} onClick={""}>
									copy
								</button> */}
							</div>
						</div>
					</FocusLock>
				)}
			</>
		);
	};

	return createPortal(Wrapper(), currentContainer);
};

export default Modal;
