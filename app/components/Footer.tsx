import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-blue-600 text-white py-6">
			<div className="max-w-7xl mx-auto text-center">
				<p className="text-sm">&copy; {new Date().getFullYear()} HR Company. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
