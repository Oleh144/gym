import { useState } from "react";

import styles from "./Navigation.module.scss";
import Opener from "../opener/Opener.jsx";
import NavItem from "./NavItem.jsx";

function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{
			text: "Ми пропонуємо",
			linkTo: "#1",
		},
		{
			text: "Про нас",
			linkTo: "#2",
		},
		{
			text: "Наші тренери",
			linkTo: "#3",
		},
		{
			text: "Зв'язатися з нами",
			linkTo: "#4",
		},
	];

	function handleClick() {
		setIsOpen(!isOpen);
	}
	return (
		<nav>
			<ul className={styles.nav + " " + (isOpen && styles.mobile)}>
				{navLinks.map((link) => {
					return <NavItem key={link.linkTo} link={link} />;
				})}
			</ul>
			<Opener handleClick={handleClick} isOpen={isOpen} />
		</nav>
	);
}

export default Navigation;
