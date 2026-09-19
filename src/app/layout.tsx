import "./globals.css";

export const metadata = {
  title: "SKD // ENGINEERING SYSTEM-01",
  description:
    "Sayan Kumar Dakua — Engineering R&D Portfolio",
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