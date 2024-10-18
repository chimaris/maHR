import React from "react";
import Button from "./UI/Button";
import Image from "next/image";
import arrowRightIcon from "../../assets/icons/arrow-right.svg";
import lady from "../../assets/images/lady.png";

const Footer: React.FC = () => {
	return (
		<footer className="bg-transparent py-6 relative">
			<div className="max-w-7xl mx-auto px-4 z-10 relative">
				<div className="rounded-[20px] py-10 px-20 relative" style={{ background: "rgba(255, 255, 255, 0.5)" }}>
					<p className="text-[32px] font-medium text-[#000]">
						Try Applyfier for free during 14-day with <br />
						no commitment. <br />
						No credit card required
					</p>
					<Button className="flex gap-3 items-center mt-10">
						<span className="text-base font-medium text-white">Start Here</span>
						<Image src={arrowRightIcon} width={16} height={16} alt="arrow right icon" />
					</Button>

					<Image className="absolute bottom-0 right-20" src={lady} width={272} height={258} alt="lady" />
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
