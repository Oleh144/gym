import styles from "./Banner.module.scss";
import Cta from "../cta/Cta.jsx";

function Banner() {
	return (
		<section className={styles.banner}>
			<div className={"container" + " " + styles.container}>
				<div className={styles.content}>
					<h1>
						Ти готов <span className="blueText">ДО ТРЕНУВАНЬ?</span>
					</h1>
					<p className={styles.paragraph}>
						Gym training is a structured and disciplined approach to
						physical exercise that focuses on strength, endurance
						and overall fitness improvement.
					</p>
					<Cta>Приєднатись</Cta>
					<ul className={styles.achievements}>
						<li>
							<span className={styles.number}>20+</span>
							<span className={styles.description}>
								Years of Experience
							</span>
						</li>
						<li>
							<span className={styles.number}>15k+</span>
							<span className={styles.description}>
								Members Join
							</span>
						</li>
						<li>
							<span className={styles.number}>14k+</span>
							<span className={styles.description}>
								Happy members
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Banner;
