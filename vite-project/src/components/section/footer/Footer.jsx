import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import FooterNav from "../../ui/footerNav/FooterNav.jsx";

import images from "../../../assets/images/logo-02.png";

import styles from "./Footer.module.scss";

function Footer() {
	return (
		<footer>
			<div className={styles.topFooter}>
				<div className={"container" + " " + styles.holder}>
					<div className={styles.logo}>
						<img src={images} alt="" />
					</div>
					<FooterNav />
					<div className="scheduleHolder">
						<h4>Розклад Роботи</h4>
						<ul className={styles.schedule}>
							<li>
								<span>
									<AccessTimeIcon />
								</span>
								<span>ПН – СБ з 8:00 до 20:00</span>
							</li>
							<li>
								<span>
									<AccessTimeIcon />
								</span>
								<span>НД – вихідний</span>
							</li>
							<li>
								<span>
									<LocationPinIcon />
								</span>
								<span>м. Харків, пл. Конституції, 21</span>
							</li>
						</ul>
					</div>
					<div className="contactInformationHolder">
						<h4>Контакти</h4>
						<ul className={styles.contactInformation}>
							<li>
								<span>
									<CallIcon />
								</span>
								<a href="tel:0973849808">+380 (97) 384 98 08</a>
							</li>
							<li>
								<span>
									<CallIcon />
								</span>
								<a href="mailtotel+0666295725">
									+3380 (66) 62 95 725
								</a>
							</li>
							<li>
								<span>
									<MailOutlineIcon />
								</span>
								<a href="mailto:sport.time.club.kh@gmail.com">
									sport.time.club.kh@gmail.com
								</a>
							</li>
							<li>
								<a href="#">
									<FacebookIcon />
								</a>
								<a href="#">
									<InstagramIcon />
								</a>
								<a href="#">
									<YouTubeIcon />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={styles.bottomFooter}>
				<p>Ⓒ 2025 All rights reserved. Sport Time</p>
			</div>
		</footer>
	);
}

export default Footer;
