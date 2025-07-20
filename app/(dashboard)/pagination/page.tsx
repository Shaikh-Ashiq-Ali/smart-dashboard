import PaginatedList from "@/app/components/pagination/PaginatedList";
import { Container } from "react-bootstrap";

export default function Pagination() {
  return (
    <Container className="py-5">
      <h2>🔁 Pagination Example</h2>
      <PaginatedList />
    </Container>
  );
}
