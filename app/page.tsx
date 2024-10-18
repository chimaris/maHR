import { NextPage } from "next";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Footer from "./components/Footer";

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<AboutUs />
			<Services />
			<Footer />
		</>
	);
};

export default Home;

// import { FC } from "react";
// import Head from "next/head";

// const Home: FC = () => {
// 	return (
// 		<>
// 			<Head>
// 				<title>Applyfier Landing Page</title>
// 			</Head>

// 			<div className="min-h-screen bg-gradient-to-br from-blue-light via-white to-slate-dark text-slate-light">
// 				{/* Header Section */}
// 				<header className="bg-white shadow-lg">
// 					<div className="container mx-auto p-5 flex justify-between items-center">
// 						{/* Logo */}
// 						<div>
// 							<img src="/images/applyfier-logo.svg" alt="Applyfier" className="h-8" />
// 						</div>
// 						{/* Nav */}
// 						<nav className="hidden md:flex space-x-6">
// 							<a href="#features" className="hover:text-blue-dark">
// 								Features
// 							</a>
// 							<a href="#about" className="hover:text-blue-dark">
// 								About Us
// 							</a>
// 							<a href="#pricing" className="hover:text-blue-dark">
// 								Pricing
// 							</a>
// 							<a href="#blog" className="hover:text-blue-dark">
// 								Blog
// 							</a>
// 						</nav>
// 						{/* Call to Action */}
// 						<div>
// 							<button className="bg-blue-light hover:bg-blue-dark text-white py-2 px-4 rounded-full transition-colors">Sign Up</button>
// 						</div>
// 					</div>
// 				</header>

// 				{/* Hero Section */}
// 				<section className="container mx-auto text-center py-20">
// 					<h1 className="text-5xl font-bold text-blue-dark mb-6">Uplift Your Hiring with Applyfier</h1>
// 					<p className="text-lg text-slate-light mb-6">
// 						Our platform is more than a hiring tool, it's a dynamic space where talent discovery meets analytics and smart team performance.
// 					</p>
// 					<button className="bg-blue-dark hover:bg-blue-light text-white py-3 px-6 rounded-full transition-colors">Get Started</button>
// 				</section>

// 				{/* Features Section */}
// 				<section id="features" className="bg-gradient-to-br from-white via-blue-light to-slate-light py-16">
// 					<div className="container mx-auto text-center">
// 						<h2 className="text-4xl font-bold mb-12">Easy Implementation in Three Easy Steps</h2>
// 						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// 							<div className="p-6 bg-white rounded-xl shadow-lg">
// 								<img src="/images/analytics.svg" alt="Real-time Analytics" className="h-12 mx-auto mb-4" />
// 								<h3 className="text-2xl font-semibold mb-2">Real-time Analytics</h3>
// 								<p>Make data-driven decisions with our comprehensive real-time analytics tool.</p>
// 							</div>
// 							<div className="p-6 bg-white rounded-xl shadow-lg">
// 								<img src="/images/candidate-ranking.svg" alt="Automated Candidate Ranking" className="h-12 mx-auto mb-4" />
// 								<h3 className="text-2xl font-semibold mb-2">Automated Candidate Ranking</h3>
// 								<p>Our system evaluates and ranks candidates automatically based on your criteria.</p>
// 							</div>
// 							<div className="p-6 bg-white rounded-xl shadow-lg">
// 								<img src="/images/integration.svg" alt="Seamless Integration" className="h-12 mx-auto mb-4" />
// 								<h3 className="text-2xl font-semibold mb-2">Seamless Integration</h3>
// 								<p>Integrate Applyfier with your existing software for a smooth hiring process.</p>
// 							</div>
// 						</div>
// 					</div>
// 				</section>

// 				{/* Add more sections: About, Testimonials, Blog, Pricing */}
// 				{/* Example for Blog Section */}
// 				<section id="blog" className="bg-gradient-to-br from-blue-light via-white to-slate-light py-16">
// 					<div className="container mx-auto text-center">
// 						<h2 className="text-4xl font-bold mb-12">From Our Blog</h2>
// 						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// 							<div className="p-6 bg-white rounded-xl shadow-lg">
// 								<img src="/images/blog-post-1.jpg" alt="Blog Post" className="w-full h-40 object-cover rounded-lg mb-4" />
// 								<h3 className="text-2xl font-semibold mb-2">Mastering the Art of Resume Crafting</h3>
// 								<p>Learn the secrets to making your resume stand out and land that dream job...</p>
// 							</div>
// 							{/* Add more blog items */}
// 						</div>
// 					</div>
// 				</section>

// 				{/* Footer Section */}
// 				<footer className="bg-slate-dark text-white py-8">
// 					<div className="container mx-auto text-center">
// 						<p>© 2024 Applyfier. All Rights Reserved.</p>
// 					</div>
// 				</footer>
// 			</div>
// 		</>
// 	);
// };

// export default Home;
