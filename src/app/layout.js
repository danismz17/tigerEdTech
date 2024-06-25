import "./styles.css";

export const metadata = {
  title: "TigerEdTech",
  description: "Pagina Prototipo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
