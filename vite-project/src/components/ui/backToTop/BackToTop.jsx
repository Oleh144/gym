import styles from "./BackToTop.module.scss";

function BackToTop({ children }) {
	return (
		<a className={styles.backToTop} href="#top">
			{children}
		</a>
	);
}

export default BackToTop;
