"use client";

import { useEffect, useState } from "react";
import { Alert, Button, Card, Spinner } from "react-bootstrap";

export default function TipFetcher() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<String | null>(null);
  const [tip, setTip] = useState<String | null>(null);

  const fetchAPI = async () => {
    setLoading(true);
    setError(null);

    // https://api.quotable.io/random?tags=motivational

    try {
      const res = await fetch(
        "https://api.allorigins.win/raw?url=https://zenquotes.io/api/random"
      );
      const data = await res.json();

      // ZenQuotes ka response: [{ q: "Quote here", a: "Author" }]
      setTip(`${data[0].q} — ${data[0].a}`);
    } catch (err) {
      setError("Failed to load the Tips API");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPI();
  },[]);

  return (
    <Card className="p-4 shadow-sm">
      <h4>🌟 Productivity Tip</h4>

      {loading && <Spinner animation="border" />}

      {error && <Alert variant="danger">{error}</Alert>}

      {tip && <p className="mt-3">🧠 {tip}</p>}

      <Button onClick={fetchAPI} disabled={loading}>
        🔄 Get New Tip
      </Button>
    </Card>
  );
}
