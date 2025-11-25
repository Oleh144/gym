import styles from "./Opener.module.scss";

function Opener({ handleClick }) {
	return (
		<span className={styles.opener} onClick={handleClick}>
			<span></span>
		</span>
	);
}

export default Opener;
