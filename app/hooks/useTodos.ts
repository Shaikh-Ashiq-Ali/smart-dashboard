'use client';

import { useEffect, useState } from "react";

type Todo = {
    id: number;
    text: string;
    completed: boolean;
}
 
export default function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('todos');
        if (saved) setTodos(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }])
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => (
            todo.id == id ? { ...todo, completed: !todo.completed } : todo
        )));
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return { todos, addTodo, toggleTodo, deleteTodo };
}