import WagmiProviders from "@/providers/WagmiProviders";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Soltice Universe Time Decay",
  description: "Time Decay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WagmiProviders>
          <Header />
          {children}
        </WagmiProviders>
      </body>
    </html>
  );
}
