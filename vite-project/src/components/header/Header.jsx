import { useState } from "react";
import images from "../../assets/images/logo-02.png";
import styles from "./Header.module.scss";
import Opener from "../opener/Opener.jsx";
import useScroll from "../../hooks/useScroll.jsx";

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const scroll = useScroll();

	function handleClick() {
		setIsOpen(!isOpen);
	}

	return (
		<header className={scroll ? styles.scroll : ""}>
			<div className={"container" + " " + styles.container}>
				<div className={styles.logo}>
					<img src={images} alt="" />
				</div>
				<nav>
					<ul
						className={
							styles.nav + " " + (isOpen && styles.mobile)
						}>
						<li>
							<a href="#">Trainers</a>
						</li>
						<li>
							<a href="#">Schedule of work</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Contact us</a>
						</li>
					</ul>
					<Opener handleClick={handleClick} />
				</nav>
			</div>
		</header>
	);
}

export default Header;
