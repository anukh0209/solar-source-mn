import { Geist } from "next/font/google";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Minimal root layout — locale-specific layout in [locale]/layout.tsx handles html/body.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
