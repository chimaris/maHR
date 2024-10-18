import React from "react";
import Image from "next/image";
import aboutImg from "../../assets/images/aboutus.png";

const AboutUs: React.FC = () => {
	return (
		<section id="about" className="bg-transparent py-28">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex items-center justify-center gap-10">
					<div className="w-1/2">
						<Image src={aboutImg} width={506} height={609} alt="hero image" />
					</div>
					<div className="w-1/2 px-5">
						<div className="flex items-center gap-4 mb-4">
							<div className="w-[150px] h-[1px] bg-[#2A2A2A]" />
							<h2 className="text-[20px] rounded-[20px] py-2 px-5" style={{ background: "rgba(255, 255, 255, 0.50)" }}>
								About Us
							</h2>
							<div className="w-[150px] h-[1px] bg-[#2A2A2A]" />
						</div>
						<h1 className="text-5xl font-semibold leading-[60px] mb-6">
							Get to Know Us <span className="text-gd">Better</span>
						</h1>
						<p className="text-lg mb-6">
							Applyfier was founded in 2020 to match the right talent globally with companies. Founded with a vision to redefine the way individuals
							connect with career paths and organizations build their dream teams, our journey is woven with the stories of countless professionals
							and businesses that have found success through collaboration.
						</p>

						<div className="flex flex-col justify-around gap-10 ">
							<div className="">
								<h3 className="text-xl font-bold">Our Mission</h3>
								<p className="">To provide efficient HR solutions that empower companies to focus on their people.</p>
							</div>
							<div className="">
								<h3 className="text-xl font-bold ">Our Vision</h3>
								<p className="">To be the leading HR service provider globally, transforming how organizations manage talent.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
