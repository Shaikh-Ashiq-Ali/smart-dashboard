'use client';
import useTodos from "../hooks/useTodos";
import TodoInput from "../components/todo/TodoInput";
import TodoList from "../components/todo/TodoList";
import { Container } from "react-bootstrap";
import ThemeToggle from "@/app/components/ThemeToggle";


export default function DashboardPage() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
      <Container>
        <ThemeToggle />
        <h2 className="mb-4">🧾 Todo Manager</h2>
        <TodoInput onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </Container>
  );
}
