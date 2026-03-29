import "./globals.css";

export const metadata = {
  title: "ASPIRE | The Agency",
  description: "Event and conference planning agency in Dublin.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
