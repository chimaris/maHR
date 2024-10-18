"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const menu = [
	{ name: "About Us", href: "#about" },
	{ name: "Services", href: "#services" },
	{ name: "Contact", href: "#footer" },
];

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => isOpen && setIsOpen(false);

	// Animation variants for the mobile menu
	const menuVariants = {
		open: {
			opacity: 1,
			y: 0,
			display: "block", // Ensure visibility when open
			transition: {
				duration: 0.5,
				ease: "easeInOut",
			},
		},
		closed: {
			opacity: 0,
			y: -50,
			transitionEnd: {
				display: "none", // Hides the menu after animation ends
			},
			transition: {
				duration: 0.5,
				ease: "easeInOut",
			},
		},
	};

	return (
		<nav className="bg-transparent fixed w-full z-50 top-0 left-0">
			<div
				className="container max-w-[1250px] mx-auto flex justify-between items-center p-5 z-10 relative rounded-3xl"
				style={{ background: "rgba(255, 255, 255, 0.50)" }}>
				{/* Logo */}
				<div className="flex items-center">
					<Link href="/">
						<div className="text-xl font-bold">
							<span className="logo text-[32px]">maHR</span>
						</div>
					</Link>
				</div>

				{/* Hamburger Icon for Mobile */}
				<div className="md:hidden">
					<button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-2xl" aria-label="Toggle Menu">
						{isOpen ? "✖" : "☰"}
					</button>
				</div>

				{/* Mobile Links  */}
				<motion.div
					className={`absolute md:hidden lg:hidden top-16 left-0 w-full bg-white py-10 md:py-0 md:bg-transparent md:relative md:w-auto`}
					variants={menuVariants}
					initial="closed"
					animate={isOpen ? "open" : "closed"}>
					<div className="flex text-center flex-col md:hidden md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0 text-lg">
						{menu.map((item, index) => (
							<a key={index} href={item.href} className="hover:border-b-2 border-[#f6731f]" onClick={handleClick}>
								{item.name}
							</a>
						))}
					</div>
				</motion.div>

				{/* Desktop Links */}
				<div className="hidden md:flex md:space-x-8 md:text-lg md:mt-0">
					{menu.map((item, index) => (
						<a key={index} href={item.href} className="hover:border-b-2 border-[#f6731f]" onClick={handleClick}>
							{item.name}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
