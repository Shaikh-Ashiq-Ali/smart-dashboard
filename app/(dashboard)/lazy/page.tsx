"use client";

import { Suspense, useState } from "react";
import { Button, Container } from "react-bootstrap";
import LazyComponent from "../../components/lazy/LazyComponent";

export default function LazyLoadingPage() {
  const [show, setShow] = useState(false);

  return (
    <Container className="py-5">
      <h2>🌀 Lazy Loading Example (React Suspense)</h2>

      <Button variant="primary" onClick={() => setShow(true)}>
        Show Lazy Component
      </Button>
      
      {/* ❗Suspense ka use karna zaroori hai lazy loaded components ke liye */}
      {show && (
        <Suspense fallback={<p className="mt-3">⏳ Loading Component...</p>}>
          <LazyComponent />
        </Suspense>
      )}
    </Container>
  );
}
