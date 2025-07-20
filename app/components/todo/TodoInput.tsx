"use client";
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function TodoInput({
  onAdd,
}: {
  onAdd: (type: string) => void;
}) {

  const [text, setText] = useState("");
  
  const handleAdd = () => {
    if(text.trim()){
      onAdd(text);
      setText('');
    }
  }

  return (
    <>
      <InputGroup>
        <Form.Control placeholder="Enter Text..." value={text} onChange={(e) => setText(e.target.value)} />
        <Button variant="primary" onClick={handleAdd}>Add</Button>
      </InputGroup>
    </>
  );
}
