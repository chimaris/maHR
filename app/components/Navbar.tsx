"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-transparent fixed w-full z-50 top-0 left-0">
			<div className="container mx-auto flex justify-between items-center p-5 z-10 relative">
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

				{/* Links */}
				<div
					className={`${
						isOpen ? "block" : "hidden"
					} absolute top-16 left-0 md:top-0 w-full bg-white py-10 md:py-0 md:bg-transparent md:relative md:block md:w-auto`}>
					<div className="flex text-center flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0 text-lg">
						<a href="#about" className="hover:text-slate-500">
							About Us
						</a>

						<a href="#services" className="hover:text-slate-500">
							Services
						</a>

						<a href="#contact" className="hover:text-slate-500">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
