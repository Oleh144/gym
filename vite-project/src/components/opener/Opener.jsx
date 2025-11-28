import styles from "./Opener.module.scss";

function Opener({ handleClick, isOpen }) {
    console.log(isOpen);
    return (
        <span
            className={styles.opener + " " + (isOpen && styles.active)}
            onClick={handleClick}
        >
            <span></span>
        </span>
    );
}

export default Opener;
