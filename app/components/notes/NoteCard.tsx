import { Note } from "@/app/type/notes";
import { Card } from "react-bootstrap";

export default function NoteCard({
  note,
  onSelect,
}: {
  note: Note;
  onSelect: (n: Note) => void;
}) {
  return (
    <Card
      className="mb-2 shadow-sm"
      onClick={() => onSelect(note)}
      style={{ cursor: "pointer" }}
    >
      <Card.Body>
        <h6>{note.title || "Untitiled"}</h6>
        <small>{note.tags.join(", ")}</small>
      </Card.Body>
    </Card>
  );
}
