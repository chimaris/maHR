"use client";
import React, { useRef } from "react";
import Image from "next/image";
import img1 from "../../assets/images/img.svg";
import img2 from "../../assets/images/img1.svg";
import img3 from "../../assets/images/img2.svg";
import { motion, useInView } from "framer-motion";

const Services: React.FC = () => {
	// Ref for the service cards
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	// Animation variants for the cards
	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section id="services" className="py-20 relative">
			<div className="max-w-7xl mx-auto text-center px-4 container z-10 relative">
				{/* Section Title */}
				<div className="flex items-center gap-2 md:gap-4 justify-center">
					<div className="w-[80px] md:w-[180px] h-[1px] bg-[#2A2A2A]" />
					<h2 className="text-[16px] md:text-[20px] rounded-[20px] py-2 px-5 whitespace-nowrap" style={{ background: "rgba(255, 255, 255, 0.50)" }}>
						Our Services
					</h2>
					<div className="w-[80px] md:w-[180px] h-[1px] bg-[#2A2A2A]" />
				</div>

				{/* Section Description */}
				<p className="my-8 w-[90%] md:w-[47%] text-center text-3xl md:text-4xl font-semibold mx-auto">
					Our services are tailored to meet the <span className="text-gd">unique</span> needs of each client.
				</p>

				{/* Service Cards */}
				<div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
					{/* Card 1 */}
					<motion.div
						variants={cardVariants}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						transition={{ duration: 1, delay: 0.1 }}
						className="p-6 shadow-lg text-white rounded-[20px] bg-[#0056B3] flex flex-col gap-4 md:gap-[16px]">
						<div
							className="rounded-full w-[60px] md:w-[70px] h-[60px] md:h-[70px] flex items-center justify-center"
							style={{ background: "rgba(255, 255, 255, 0.80)" }}>
							<Image src={img1} alt="img" width={50} height={50} />
						</div>
						<h3 className="text-lg md:text-xl font-bold text-white text-[24px] md:text-[30px] font-medium leading-[28px] md:leading-[32px]">
							Talent <br /> Acquisition
						</h3>
						<p className="text-white text-sm md:text-base">We help you find the best talent to grow your organization.</p>
					</motion.div>

					{/* Card 2 */}
					<motion.div
						variants={cardVariants}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="p-6 shadow-lg rounded-[20px] flex flex-col gap-4 md:gap-[16px]"
						style={{ background: "rgba(255, 255, 255, 0.50)" }}>
						<div className="rounded-full w-[60px] md:w-[70px] h-[60px] md:h-[70px] flex items-center justify-center bg-[#FEA334]">
							<Image src={img2} alt="img" width={50} height={50} />
						</div>
						<h3 className="text-lg md:text-xl font-bold text-[24px] md:text-[30px] font-medium leading-[28px] md:leading-[32px]">
							Payroll <br /> Management
						</h3>
						<p className="text-sm md:text-base">We help you manage payroll effectively for your organization.</p>
					</motion.div>

					{/* Card 3 */}
					<motion.div
						variants={cardVariants}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="p-6 shadow-lg rounded-[20px] flex flex-col gap-4 md:gap-[16px]"
						style={{ background: "rgba(255, 255, 255, 0.50)" }}>
						<div className="rounded-full w-[60px] md:w-[70px] h-[60px] md:h-[70px] flex items-center justify-center bg-[#FEA334]">
							<Image src={img3} alt="img" width={50} height={50} />
						</div>
						<h3 className="text-lg md:text-xl font-bold text-[24px] md:text-[30px] font-medium leading-[28px] md:leading-[32px]">
							Employee <br /> Benefits
						</h3>
						<p className="text-sm md:text-base">We offer tailored employee benefits packages to meet your needs.</p>
					</motion.div>
				</div>
			</div>

			{/* Background gradients */}
			<div className="rectangle-7 top-4 left-[50%] absolute z-0" />
			<div className="rectangle-8 left-0 bottom-0 absolute z-0" />
		</section>
	);
};

export default Services;
