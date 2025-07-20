"use client";

import { Button, ListGroup } from "react-bootstrap";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function ListItem({
  todo,
  onToggle,
  onDelete,
}:{
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <ListGroup.Item>
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <Button variant="danger" size="sm" onClick={() => onDelete(todo.id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
}
