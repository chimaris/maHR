import React from "react";

const AboutUs: React.FC = () => {
	return (
		<section id="about" className="bg-slate-100 py-20">
			<div className="max-w-7xl mx-auto text-center px-4">
				<h2 className="text-4xl font-bold text-blue-600 mb-6">About Us</h2>
				<p className="text-lg text-slate-700 mb-6">
					At HR Company, our mission is to empower organizations by streamlining HR processes and delivering solutions that put people first.
				</p>
				<div className="flex flex-col md:flex-row justify-around">
					<div className="p-6">
						<h3 className="text-xl font-bold text-blue-600">Our Mission</h3>
						<p className="text-slate-600">To provide efficient HR solutions that empower companies to focus on their people.</p>
					</div>
					<div className="p-6">
						<h3 className="text-xl font-bold text-blue-600">Our Vision</h3>
						<p className="text-slate-600">To be the leading HR service provider globally, transforming how organizations manage talent.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
