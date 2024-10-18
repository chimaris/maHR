import React from "react";
import Image from "next/image";
import lady from "../../assets/images/lady.png";

const Footer: React.FC = () => {
	return (
		<footer className="bg-transparent py-6 relative" id="footer">
			<div className="max-w-7xl mx-auto px-4 z-10 relative">
				<div className="rounded-[20px] h-[671px] md:h-auto p-4 md:py-10 md:px-20 relative" style={{ background: "rgba(255, 255, 255, 0.5)" }}>
					<p className="text-[32px] font-medium text-[#000]">
						Employment <span className="text-gd">Resolved</span>! <br />
					</p>
					<p className="w-full md:w-1/2 mt-3">
						Find out why 300,000 businesses are automating recruitment, HR, payroll and benefits with <span className="logo">maHR</span>.
					</p>

					{/* contact information here */}
					<div className="flex flex-col gap-4 mt-5">
						<div className="w-full md:w-1/2">
							<h3 className="md:text-[24px] font-medium text-[#000]">Contact Us</h3>
							<p className="md:text-[16px] text-[#000]">+234 7066532289</p>
							<p className="md:text-[16px] text-[#000]"> wendumaris@gmail.com </p>
						</div>
						<div className="w-full md:w-1/2">
							<h3 className="md:text-[24px] font-medium text-[#000]">Address</h3>
							<p className="md:text-[16px] text-[#000]">No 1, Main Street, Abuja</p>
						</div>
					</div>

					<Image className="absolute bottom-0 right-4 md:right-20" src={lady} width={272} height={258} alt="lady" />
				</div>
				<div className="max-w-7xl mx-auto text-center mt-28">
					<p className="text-sm">
						&copy; {new Date().getFullYear()} <span className="logo">maHR</span>. All rights reserved.
					</p>
				</div>
			</div>
			<div className="rectangle-12 bottom-0 right-0 absolute z-0" />
		</footer>
	);
};

export default Footer;
