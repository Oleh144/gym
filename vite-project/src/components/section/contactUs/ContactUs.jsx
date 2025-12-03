import { Formik } from "formik";
import styles from "./ContactUs.module.scss";
import GMap from "../../ui/googleMap/GMap.jsx";

function ContactUs() {
	return (
		<section id="4" className={styles.contactUs}>
			<div className="container">
				<div className={styles.wrapper}>
					<div className={styles.mapHolder}>
						<GMap />
					</div>
					<div className="formHolder">
						<h1>
							Написати <span className="blueText"> нам</span>
						</h1>
						<Formik
							initialValues={{
								name: "",
								email: "",
								message: "",
							}}
							validate={(values) => {
								const errors = {};
								if (!values.email) {
									errors.email = "Обов'язкове поле";
								} else if (
									!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
										values.email
									)
								) {
									errors.email = "Invalid email address";
								}

								if (!values.message.trim()) {
									errors.message = "Required";
								}
								return errors;
							}}
							onSubmit={(values, { setSubmitting }) => {
								setTimeout(() => {
									alert(JSON.stringify(values, null, 2));
									setSubmitting(false);
								}, 400);
							}}>
							{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit,
								isSubmitting,
							}) => (
								<form
									className={styles.contactForm}
									onSubmit={handleSubmit}>
									<div className={styles.box1}>
										<input
											className={styles.name}
											type="text"
											name="name"
											placeholder="Ваше ім'я"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.name}
										/>
									</div>
									<div className={styles.box2}>
										<input
											className={styles.email}
											type="email"
											name="email"
											placeholder="Ваш email"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.email}
										/>
										{errors.email && touched.email && (
											<span
												className={styles.errorMessage}>
												{errors.email}
											</span>
										)}
									</div>
									<div className={styles.box3}>
										<textarea
											className={styles.message}
											name="message"
											id="message"
											placeholder="Ваше повідомлення"
											rows="10"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.message}></textarea>
										{errors.message && touched.message && (
											<span
												className={styles.errorMessage}>
												Нема шо відправляти
											</span>
										)}
									</div>

									<button
										className={styles.box4}
										type="submit"
										disabled={isSubmitting}>
										Надіслати
									</button>
								</form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactUs;
