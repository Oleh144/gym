import styles from "./AboutUs.module.scss";
import imgAbout from "../../assets/images/img-about.jpg";

function AboutUs() {
	return (
		<section id="2" className={styles.about}>
			<div className="container">
				<div className={styles.wrapper}>
					<div className={styles.textHolder}>
						<h1>
							ласкаво запрошуємо до{" "}
							<span className="blueText">Sport time</span>
						</h1>
						<p>
							«Sport Time» – твій спортклуб у самому центрі міста.
							Досить говорити собі «завтра», тому що ми вже
							відкриті. Тепер після роботи на тебе чекають
							індивідуальні тренування, групові заняття з фітнесу,
							величезна зона бойових мистецтв, тренажерний зал, а
							також тренування для ваших дітей.
						</p>
						<p>
							Досить мріяти про ідеальну фігуру, пора її
							створювати!
						</p>
					</div>
					<div className={styles.imgHolder}>
						<img src={imgAbout} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
