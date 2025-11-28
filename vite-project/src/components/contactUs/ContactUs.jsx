import { Formik } from "formik";
import styles from "./ContactUs.module.scss";

function ContactUs() {
    return (
        <section className={styles.contactUs}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className="mapHolder"></div>
                    <div className="forHolder">
                        <h1>Звязатись з нами</h1>
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                message: "",
                            }}
                            validate={(values) => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = "Required";
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
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form
                                    className={styles.contactForm}
                                    onSubmit={handleSubmit}
                                >
                                    <div className={styles.box1}>
                                        <input
                                            className={styles.name}
                                            type="text"
                                            name="name"
                                            placeholder="Name"
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
                                            placeholder="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        {errors.email && touched.email && (
                                            <span
                                                className={styles.errorMessage}
                                            >
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                    <div className={styles.box3}>
                                        {errors.message}
                                        <textarea
                                            className={styles.message}
                                            name="message"
                                            id="message"
                                            placeholder="message"
                                            rows="10"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.message}
                                        ></textarea>
                                        {errors.message && touched.message && (
                                            <span
                                                className={styles.errorMessage}
                                            >
                                                Nothing to send
                                            </span>
                                        )}
                                    </div>

                                    <button
                                        className={styles.box4}
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Submit
                                    </button>
                                </form>
                            )}
                        </Formik>
                        {/* <form className={styles.contactForm} action="#">
                            <input
                                className={styles.box1}
                                type="text"
                                placeholder="Ім'я"
                            />
                            <input
                                className={styles.box2}
                                type="email"
                                placeholder="Email"
                            />
                            <textarea
                                className={styles.box3}
                                name="message"
                                placeholder="Повідомлення"
                                id="message"
                            ></textarea>
                            <button className={styles.box4} type="submit">
                                submit
                            </button>
                        </form> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
