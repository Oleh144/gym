import styles from "./Trainers.module.scss";
import Slider from "../../ui/slider/Slider";

import trainer1 from "../../../assets/images/trainer-01.jpg";
import trainer2 from "../../../assets/images/trainer-02.jpg";
import trainer3 from "../../../assets/images/trainer-03.jpg";
import trainer4 from "../../../assets/images/trainer-04.jpg";
import trainer5 from "../../../assets/images/trainer-05.jpg";
import trainer6 from "../../../assets/images/trainer-06.jpg";
import trainer7 from "../../../assets/images/trainer-07.jpg";

function Trainers() {
	const professionals = [
		{
			photoUrl: trainer1,
			fullName: "Ольга смірнова",
			position: "Тренер тренажерного залу",
			achievements: [
				"Спортивний стаж більше 13-ти років і тренерський стаж – 9 років.",
				"Кандидат в майстри спорту з легкої атлетики та гирьового спорту.",
				"Неодногратний призер чемпіонатів України в даних видах спорту.",
				"Дипломований фахівець в галузі фізичної культури і спорту.",
			],
		},
		{
			photoUrl: trainer2,
			fullName: "Леонід Скидан",
			position: "тренер тренажерного залу",
			achievements: [
				"Майстер спорту України, чемпіон та багаторазовий призер чемпіонатів України з гирьового спорту",
				"Випускник Харківської державної академії фізичної культури",
				"Досвід роботи більше трьох років.",
				"Виховав переможців і призерів обласних чемпіонатів з гирьового спорту.",
			],
		},
		{
			photoUrl: trainer3,
			fullName: "Катерина Шакалова",
			position: "тренер з греплінгу та панкратіону",
			achievements: [],
		},
		{
			photoUrl: trainer4,
			fullName: "Анна фененко",
			position: "Тренер з тайського боксу та кікбоксингу",
			achievements: [
				"Дворазова чемпіонка світу з кікбоксингу та тайському боксу",
				"Багато разова чемпіонка України, межрегіональних, областних турнірів",
				"Майстер спорту з кікбоксингу ISKA",
				"Кандидат в майстра спорту з боксу",
			],
		},
		{
			photoUrl: trainer5,
			fullName: "Марк Шумкін",
			position: "Тренер з боксу",
			achievements: [],
		},
		{
			photoUrl: trainer6,
			fullName: "олексій смирнов",
			position: "професійний тренер, дієтолог",
			achievements: [],
		},
		{
			photoUrl: trainer7,
			fullName: "ДІАНА ВЕРНЕР",
			position: "тренер ВИЩОЇ КАТЕГОРІЇ, РЕАБІЛІТОЛОГ, ДІЄТОЛОГ",
			achievements: [],
		},
	];

	return (
		<section id="3" className={styles.trainers}>
			<div className="container">
				<div className={styles.content}>
					<h1>
						Наші <span className="blueText">тренери</span>
					</h1>
				</div>
				<Slider professionals={professionals} />
			</div>
		</section>
	);
}

export default Trainers;
