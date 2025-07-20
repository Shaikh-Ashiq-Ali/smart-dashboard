"use client";

import { useState } from "react";
import { Button } from "react-bootstrap";

// 📌 Sample data: 20 dummy tips (normally yeh API se aata hai)
const data = Array.from({ length: 20 }, (_, i) => `🔥 Tip ${i + 1}`);

export default function PaginatedList() {
  const [currentPage, setCurrentPage] = useState(1);

  const showListPerPage = 5;
  const totalPages = Math.ceil(data.length / showListPerPage);

  const startIdx = (currentPage - 1) * showListPerPage;
  const currentPageItems = data.slice(startIdx, startIdx + showListPerPage);

  return (
    <>
      <div className="mt-4">
        <h4>📑 Paginated List</h4>
        <ul className="list-group">
          {currentPageItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* 🔁 Prev/Next Buttons */}
      <div className="d-flex justify-content-between mt-3">
        <Button
          variant="secondary"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          ⬅️ Prev
        </Button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <Button
          variant="secondary"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((next) => next + 1)}
        >
          Next ➡️
        </Button>
      </div>
    </>
  );
}
