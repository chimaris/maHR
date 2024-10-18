import React from "react";
import Button from "./UI/Button";
import Image from "next/image";
import heroImg from "../../assets/images/hero.png";
import arrowRightIcon from "../../assets/icons/arrow-right.svg";
import disneyLogo from "../../assets/images/disney.png";
import fedexLogo from "../../assets/images/fedex.png";
import fordLogo from "../../assets/images/ford.png";
import gapLogo from "../../assets/images/gap.png";
import krogarLogo from "../../assets/images/kroger.png";
import uberLogo from "../../assets/images/uber.png";

const HeroSection: React.FC = () => {
	return (
		<section className="pt-20 relative w-full">
			{/* Container for content */}
			<div className="container flex flex-col md:flex-row items-center justify-center mx-auto gap-10 md:gap-20 relative z-10 px-4">
				<div className="w-full md:w-1/2">
					<div className="max-w-7xl mx-auto">
						<h1 className="text-3xl md:text-5xl font-semibold leading-[40px] md:leading-[60px] mb-6 text-center md:text-left">
							<span className="text-gd">Discover</span> Your Dream Team, Find Top Talent with maHR
						</h1>
						<p className="text-base md:text-lg mb-8 text-center md:text-left">
							Welcome to MaHR, the premier solution for finding great talent. Streamline your HR processes with our expert solutions.
						</p>

						<div className="w-full md:w-[392px] border border-[#2A2A2A] rounded-[30px] h-[59px] flex justify-between items-center px-4">
							<input type="text" placeholder="Your Email" className="bg-transparent flex-1" />
							<Button className="flex gap-3 items-center">
								<span className="text-base font-medium text-white">Start Here</span>
								<Image src={arrowRightIcon} width={24} height={24} alt="arrow right icon" />
							</Button>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/2 flex justify-center md:justify-end">
					<Image src={heroImg} width={562} height={577} alt="hero image" className="w-full max-w-[300px] md:max-w-none h-auto" />
				</div>
			</div>

			{/* Trusted by section */}
			<div className="flex flex-col items-center justify-center mt-10 relative z-10 px-4">
				<p className="text-base md:text-lg mb-8 text-center">Trusted by 100+ fast-growing-company</p>
				<div className="flex flex-wrap justify-center gap-10 md:gap-[100px]">
					<Image src={disneyLogo} width={113} height={47} alt="disney logo" />
					<Image src={fedexLogo} width={107} height={10} alt="fedex logo" />
					<Image src={fordLogo} width={128} height={45} alt="ford logo" />
					<Image src={gapLogo} width={73} height={60} alt="gap logo" />
					<Image src={krogarLogo} width={99} height={81} alt="krogar logo" />
					<Image src={uberLogo} width={102} height={35} alt="uber logo" />
				</div>
			</div>

			{/* Gradient Divs */}
			<div className="rectangle-4 left-[30%] bottom-0 absolute z-0" />
			<div className="rectangle-6 right-0 bottom-0 absolute z-0" />
			<div className="rectangle-5 top-0 right-0 absolute z-0" />
			<div className="rectangle-4-1 top-2 left-[30%] absolute z-0" />
		</section>
	);
};

export default HeroSection;
