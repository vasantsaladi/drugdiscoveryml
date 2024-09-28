import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="video" href="/video1.mp4" type="video/mp4" />
      </head>
      <body>{children}</body>
    </html>
  );
}
