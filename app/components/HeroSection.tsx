import React from "react";

const HeroSection: React.FC = () => {
	return (
		<section className="text-[#1B1B1B] h-screen flex items-center" style={{}}>
			<div className="max-w-7xl mx-auto text-center px-4">
				<h1 className="text-5xl font-bold mb-6">Discover Your Dream Team, Find Top Talent with maHR</h1>
				<p className="text-lg mb-8">Streamline your HR processes with our expert solutions.</p>
				<p className="text-lg mb-8">
					Welcome to MaHR, the premier solution for finding great talent. Our services are tailored to meet the unique needs of each client.{" "}
				</p>
				<a href="#about" className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition">
					Learn More
				</a>
			</div>
		</section>
	);
};

export default HeroSection;
