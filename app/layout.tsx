import type { Metadata } from "next";
import { Audiowide, Inter } from "next/font/google";
import "./globals.css";
import "@/app/ui/Appbar";
import Appbar from "@/app/ui/Appbar";
import { cn } from "@/lib/utils";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const audiowide = Audiowide({
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Mews",
	description: "A custom news app using on the market apis",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn(
				"h-full",
				"antialiased",
				"flex",
				"flex-col",
				audiowide.className,
				"font-sans",
				inter.variable,
			)}
		>
			<body className="min-h-full flex-1 flex flex-col ">
				<Suspense fallback=<div>Loading Navbar</div>>
					<Appbar></Appbar>
				</Suspense>

				{children}
			</body>
		</html>
	);
}
