import styles from "./WhyChooseUs.module.scss";
import gym from "../../assets/images/gym.jpg";
import materialArt from "../../assets/images//materialArt.jpg";
import acrobaticSchool from "../../assets/images/acrobaticSchool.jpg";
import box from "../../assets/images/box.jpg";
import fitnes from "../../assets/images/fitnes.jpg";
import stretching from "../../assets/images/stretching.jpg";

function WhyChooseUs() {
	return (
		<section className={styles.WhyChooseUs}>
			<div className="container">
				<div className={styles.content}>
					<h1>
						Why <span className="blueText">Choose Us</span>
					</h1>
					<p>
						Gym workouts offer a versatile and customisable
						experience, allowing everyone to set specific fitness
						goals.
					</p>
				</div>
				<div className={styles.cardHolder}>
					<div className={styles.card}>
						<div className={styles.img}>
							<img src={gym} alt="" />
						</div>
						<h3>lorem ipsum</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Quo, cumque!
						</p>
					</div>
					<div className={styles.card}>
						<div className={styles.img}>
							<img src={materialArt} alt="" />
						</div>
						<h3>lorem ipsum</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Quo, cumque!
						</p>
					</div>
					<div className={styles.card}>
						<div className={styles.img}>
							<img src={acrobaticSchool} alt="" />
						</div>
						<h3>lorem ipsum</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Quo, cumque!
						</p>
					</div>
					<div className={styles.card}>
						<div className={styles.img}>
							<img src={box} alt="" />
						</div>
						<h3>lorem ipsum</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Quo, cumque!
						</p>
					</div>
					<div className={styles.card}>
						<div className={styles.img}>
							<img src={fitnes} alt="" />
						</div>
						<h3>lorem ipsum</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Quo, cumque!
						</p>
					</div>
					<div className={styles.card}>
						<div className={styles.img}>
							<img src={stretching} alt="" />
						</div>
						<h3>lorem ipsum</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Quo, cumque!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhyChooseUs;
