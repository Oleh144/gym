import NavItem from "../navigation/NavItem.jsx";
import styles from "./FooterNav.module.scss";

function FooterNav() {
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

	return (
		<nav>
			<ul className={styles.nav}>
				{navLinks.map((link) => {
					return <NavItem key={link.linkTo} link={link} />;
				})}
			</ul>
		</nav>
	);
}

export default FooterNav;
