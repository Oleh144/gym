import styles from "./Cta.module.scss";

function Cta({ children }) {
	return (
		<a className={styles.cta + " " + styles.ctaMargin} href="#">
			{children}
		</a>
	);
}

export default Cta;
