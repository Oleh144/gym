import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs";
import AboutUs from "./components/aboutUs/AboutUs";
import Trainers from "./components/trainers/Trainers";
import ContactUs from "./components/contactUs/ContactUs";

function App() {
    return (
        <>
            <Header />
            <Banner />
            <WhyChooseUs />
            <AboutUs />
            <Trainers />
            <ContactUs />
        </>
    );
}

export default App;
