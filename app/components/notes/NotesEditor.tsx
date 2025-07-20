"use client";
import { Note } from "@/app/type/notes";
import { useEffect, useRef, useState } from "react";
import { Button, Card, Form} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import html2pdf from 'html2pdf.js';

export default function NotesEditor({note, onSave}:{note : Note; onSave:(n:Note) => void}) {

  const [title, setTitle] = useState(note.title);
  const [tags, setTags] = useState(note.tags.join(', '));
  const [content, setContent] = useState(note.content);
  const previewRef = useRef(null);

  useEffect(()=> {
    setTitle(note.title);
    setTags(note.tags.join(', '));
    setContent(note.content);
  },[note]);

  useEffect(()=>{
    const updated:Note = {
      ...note,
      title,
      tags : tags.split(',').map(t => t.trim()),
      content,
    };
    onSave(updated);
  },[title,tags,content]);

  const handleDownload = async () => {
    if(!previewRef.current) return;
     const html2pdf = (await import('html2pdf.js')).default;
    html2pdf().from(previewRef.current).save(`${title || 'note'}.pdf`);
  }

  return (
    <Card className="p-3 shadow-sm">
      <Form.Group className="mb-2">
        <Form.Label>📝 Title</Form.Label>
        <Form.Control value={title} onChange={e => setTitle(e.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>🏷️ Tags (comma separated)</Form.Label>
        <Form.Control value={tags} onChange={e => setTags(e.target.value)}  />
      </Form.Group>
      
      <Form.Group className="mb-2">
        <Form.Label>✍️ Content (Markdown supported)</Form.Label>
        <Form.Control as='textarea' rows={10} value={content} onChange={e => setContent(e.target.value)}  />
      </Form.Group>

      <Button className="mb-3" variant="outline-primary" onClick={handleDownload}>
        ⬇️ Download as PDF
      </Button>

      <Card className="p-3 mt-3 shadow-sm" ref={previewRef}>
        <h5>👀 Live Preview</h5>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Card>
    </Card>
  );
}
