"use client";
import React, { useCallback, useMemo, useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function PerformanceDemo() {
  const [number, setNumber] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  // ✅ useMemo: Expensive factorial calculation memoized
  const factorial = useMemo(() => {
    console.log("🔁 Recalculating factorial...");
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);

  // 🎨 Dynamic style based on darkMode
  const themeStyle = {
    backgroundColor: darkMode ? "#333" : "#f4f4f4",
    color: darkMode ? "#fff" : "#000",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "20px",
  };

  const handleToggleTheme = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h3>🚀 useMemo & useCallback Demo</h3>

      <Form.Group className="mt-3">
        <Form.Label>Enter Number (for Factorial):</Form.Label>
        <Form.Control
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </Form.Group>

      <div style={themeStyle} className="mt-4">
        <p>
          🔢 Factorial of <strong>{number}</strong> is{" "}
          <strong>{factorial}</strong>
        </p>
        <Button onClick={handleToggleTheme} variant="secondary">
          Toggle Theme
        </Button>
      </div>
    </div>
  );
}
