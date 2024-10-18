import React from "react";

type Props = {
	children: React.ReactNode;
	className?: string;
};

const Button = ({ children, className }: Props) => {
	return (
		<button
			className={`bg-[#0056B3] rounded-[50px] py-3 px-5 text-white hover:bg-blue-600 transition text-base font-medium ${className && className}`}>
			{children}
		</button>
	);
};

export default Button;
