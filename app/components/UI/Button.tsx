"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {
	children: React.ReactNode;
	className?: string;
};

const Button = ({ children, className }: Props) => {
	return (
		<>
			<motion.button
				whileTap={{ scale: 0.9 }}
				className={`bg-[#0056B3] rounded-[50px] py-2 hidden md:block px-4 md:py-3 md:px-5 text-sm md:text-base text-white font-medium whitespace-nowrap ${
					className ? className : ""
				}`}>
				{children}
			</motion.button>
			<button
				className={`bg-[#0056B3] rounded-[50px] block md:hidden py-2 px-4 md:py-3 md:px-5 text-sm md:text-base text-white font-medium whitespace-nowrap ${
					className ? className : ""
				}`}>
				{children}
			</button>
		</>
	);
};

export default Button;
