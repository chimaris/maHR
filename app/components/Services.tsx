import React from "react";
import Image from "next/image";
import img1 from "../../assets/images/img.svg";
import img2 from "../../assets/images/img1.svg";
import img3 from "../../assets/images/img2.svg";

const Services: React.FC = () => {
	return (
		<section id="services" className="py-20">
			<div className="max-w-7xl mx-auto text-center px-4">
				<div className="flex items-center gap-4 justify-center">
					<div className="w-[180px] h-[1px] bg-[#2A2A2A]" />
					<h2 className="text-[20px] rounded-[20px] py-2 px-5" style={{ background: "rgba(255, 255, 255, 0.50)" }}>
						Our Services
					</h2>
					<div className="w-[180px] h-[1px] bg-[#2A2A2A]" />
				</div>
				<p className="mb-8 w-[50%] text-center text-3xl font-semibold  mx-auto">
					Our <span className="text-gd">services</span> are tailored to meet the unique needs of each client.{" "}
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
					<div className="p-6 shadow-lg text-white rounded-[20px] bg-[#0056B3] flex flex-col gap-[16px]">
						<div className="rounded-full w-[70px] h-[70px] flex items-center justify-center" style={{ background: "rgba(255, 255, 255, 0.80)" }}>
							<Image src={img1} alt="img" width={50} height={50} />
						</div>
						<h3 className="text-xl font-bold text-white text-[30px] font-medium leading-[42px] ">
							Talent <br /> Acquisition
						</h3>
						<p className="text-white">We help you find the best talent to grow your organization.</p>
					</div>
					<div className="p-6 shadow-lg rounded-[20px] flex flex-col gap-[16px]" style={{ background: "rgba(255, 255, 255, 0.50)" }}>
						<div className="rounded-full w-[70px] h-[70px] flex items-center justify-center bg-[#FEA334]">
							<Image src={img2} alt="img" width={50} height={50} />
						</div>
						<h3 className="text-xl font-bold  text-[30px] font-medium leading-[42px] ">
							Payroll <br /> Management
						</h3>
						<p className="">We help you find the best talent to grow your organization.</p>
					</div>
					<div className="p-6 shadow-lg rounded-[20px]  flex flex-col gap-[16px]" style={{ background: "rgba(255, 255, 255, 0.50)" }}>
						<div className="rounded-full w-[70px] h-[70px] flex items-center justify-center bg-[#FEA334]">
							<Image src={img3} alt="img" width={50} height={50} />
						</div>
						<h3 className="text-xl font-bold text-[30px] font-medium leading-[42px] ">
							Employee <br /> Benefits
						</h3>
						<p className="">We help you find the best talent to grow your organization.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
