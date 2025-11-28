import styles from "./AboutUs.module.scss";
import imgAbout from "../../assets/images/img-about.jpg"

function AboutUs() {
	return (
		<section className={styles.about}>
			<div className="container">
				<div className={styles.wrapper}>
					<div className={styles.textHolder}>
						<h1>we have a lot of <span className="blueText">experience</span></h1>
						<p>
							In quisque nunc dictumst etiam pellentesque et. Vel
							malesuada diam lorem tellus. Amet mauris feugiat
							ipsum natoque odio donec. Sit at lacus consequat
							justo odio condimentum dui. Faucibus id blandit
							feugiat mi tellus sit etiam donec aliquam. Dictumst
							egestas ut facilisi vel.
						</p>
						<p>
							Sem consequat fermentum pellentesque risus purus
							quis gravida. Nulla porttitor ultrices facilisis non
							commodo diam morbi cursus eu. Semper ut in mauris
							gravida id cursus urna. Magnis vulputate orci risus
							felis eget lectus morbi. Et cursus mauris
							condimentum pretium arcu sed dignissim.
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
