import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/globals.css";
import { Container, Navbar} from "react-bootstrap";
import Link from "next/link";

export const metadata = {
  title: "Smart Dashboard",
  description: "A full-featured productivity dashboard in React/Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="my-4">
            <Link href="/">To Do</Link>
            <Link href="pomodoro">Pomodoro</Link>
            <Link href="notes">Notes</Link>
            <Link href="habits">Habits</Link>
            <Link href="tips">Tips</Link>
            <Link href="lazy">Lazy</Link>
            <Link href="pagination">Pagination</Link>
            <Link href="performance">Performance</Link>
          </Container>
        </Navbar>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
