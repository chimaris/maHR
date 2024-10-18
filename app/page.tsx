import { NextPage } from "next";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Footer from "./components/Footer";

const Home: NextPage = () => {
	return (
		<div className="background overflow-hidden">
			<Navbar />
			<HeroSection />
			<AboutUs />
			<Services />
			<Footer />
		</div>
	);
};

export default Home;
