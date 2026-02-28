import "./fonts.css";
import "./globals.css";

export const metadata = {
  title: "Wired Test Part 2",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
