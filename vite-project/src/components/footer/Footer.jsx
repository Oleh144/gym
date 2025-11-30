import FooterNav from "../footerNav/FooterNav.jsx";

import images from "../../assets/images/logo-02.png";
import styles from "./Footer.module.scss";

function Footer() {
	return (
		<footer>
			<div className="topFooter">
				<div className={"container" + " " + styles.holder}>
					<div className={styles.logo}>
						<img src={images} alt="" />
					</div>
					<FooterNav />
				</div>
			</div>
			<div className={styles.bottomFooter}>
				<p>Ⓒ 2025 All rights reserved. Sport Time</p>
			</div>
		</footer>
	);
}

export default Footer;
