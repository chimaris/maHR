import React from "react";

const Services: React.FC = () => {
	return (
		<section id="services" className="py-20">
			<div className="max-w-7xl mx-auto text-center px-4">
				<h2 className="text-4xl font-bold text-blue-600 mb-6">Our Services</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="p-6 bg-white shadow-lg rounded-lg">
						<h3 className="text-xl font-bold text-blue-600">Talent Acquisition</h3>
						<p className="text-slate-600">We help you find the best talent to grow your organization.</p>
					</div>
					<div className="p-6 bg-white shadow-lg rounded-lg">
						<h3 className="text-xl font-bold text-blue-600">Payroll Management</h3>
						<p className="text-slate-600">Streamline payroll processing and ensure timely payments.</p>
					</div>
					<div className="p-6 bg-white shadow-lg rounded-lg">
						<h3 className="text-xl font-bold text-blue-600">Employee Benefits</h3>
						<p className="text-slate-600">We provide solutions for employee benefit management and wellness.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
