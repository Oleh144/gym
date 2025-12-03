import Banner from "./components/section/banner/Banner";
import Header from "./components/section/header/Header";
import WhyChooseUs from "./components/section/whyChooseUs/WhyChooseUs";
import AboutUs from "./components/section/aboutUs/AboutUs";
import Trainers from "./components/section/trainers/Trainers";
import ContactUs from "./components/section/contactUs/ContactUs";
import Footer from "./components/section/footer/Footer.jsx";

function App() {
	return (
		<>
			<Header />
			<Banner />
			<WhyChooseUs />
			<AboutUs />
			<Trainers />
			<ContactUs />
			<Footer />
		</>
	);
}

export default App;
