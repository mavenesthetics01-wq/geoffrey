import "./globals.css";

export const metadata = {
  title: "Dr. Geoffrey Vaz | Aesthetic Medicine",
  description: "Dr. Geoffrey Vaz — MD Dermatologist and Medical Aesthetics Expert."
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}