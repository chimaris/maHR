import React from "react";

type Props = {
	children: React.ReactNode;
	className?: string;
};

const Button = ({ children, className }: Props) => {
	return (
		<button
			className={`bg-[#0056B3] rounded-[50px] py-2 px-4 md:py-3 md:px-5 text-sm md:text-base text-white hover:bg-blue-600 transition font-medium whitespace-nowrap ${
				className ? className : ""
			}`}>
			{children}
		</button>
	);
};

export default Button;
