import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "maHR Consulting",
	description: "Discover Your Dream Team, Find Top Talent with maHR consulting",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
