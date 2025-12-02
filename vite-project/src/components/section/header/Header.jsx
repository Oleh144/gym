import useScroll from "../../../hooks/useScroll.jsx";

import images from "../../../assets/images/logo-02.png";
import styles from "./Header.module.scss";

import Navigation from "../../ui/navigation/Navigation.jsx";

function Header() {
	const scroll = useScroll();

	return (
		<header className={scroll ? styles.scroll : ""}>
			<div className={"container" + " " + styles.container}>
				<div className={styles.logo}>
					<img src={images} alt="" />
				</div>
				<Navigation />
			</div>
		</header>
	);
}

export default Header;
