"use client";
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Note } from "@/app/type/notes";
import NotesEditor from "./NotesEditor";
import NoteCard from "./NoteCard";

export default function NotesList() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<Note | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("notes-v2");
    if (saved) setNotes(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-v2", JSON.stringify(notes));
  }, [notes]);

  const handleAdd = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "Untitiled",
      tags: [],
      content: "",
      createdAt: new Date().toISOString(),
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote);
  };

  const handleSave = (updateNotes: Note) => {
    setNotes(notes.map((n) => (n.id === updateNotes.id ? updateNotes : n)));
  };

  return (
    <Row>
      <Col md={4}>
        <Button variant="success" className="mb-3 w-100" onClick={handleAdd}>
          ➕ New Note
        </Button>
        {notes.map((note) => (
          // <NoteCard key={note.id} note={note} onSelect={setActiveNote} />
          <Card
            key={note.id}
            className="mb-2 shadow-sm"
            onClick={() => setActiveNote(note)}
            style={{ cursor: "pointer" }}
          >
            <Card.Body>
              <h6>{note.title || "Untitiled"}</h6>
              <small>{note.tags.join(", ")}</small>
            </Card.Body>
          </Card>
        ))}
      </Col>
      <Col md={8}>
        {activeNote ? (
          <NotesEditor note={activeNote} onSave={handleSave} />
        ) : (
          <p>Select or create a note to begin.</p>
        )}
      </Col>
    </Row>
  );
}
