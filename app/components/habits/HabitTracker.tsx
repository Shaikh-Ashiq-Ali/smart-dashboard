"use client";
import { useEffect, useReducer, useState } from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// ✅ Ek habit ka structure define kiya
type Habit = {
  id: number; // unique id
  name: string; // habit ka naam
  progress: boolean[]; // 7 din ka true/false array
};

// ✅ Actions ke types define kiye
type Action =
  | { type: "ADD_HABITS"; name: string }
  | { type: "TOGGLE_PROGRESS"; id: number; dayIndex: number }
  | { type: "SET_HABITS"; habits: Habit[] };

function habitReducer(state: Habit[], action: Action): Habit[] {
  switch (action.type) {
    case "ADD_HABITS":
    //   console.log("Ebnter");
      return [
        ...state,
        {
          id: Date.now(),
          name: action.name,
          progress: Array(7).fill(false),
        },
      ];

    case "TOGGLE_PROGRESS":
      return state.map((habit) =>
        habit.id === action.id
          ? {
              ...habit,
              progress: habit.progress.map((val, idx) =>
                idx === action.dayIndex ? !val : val
              ),
            }
          : habit
      );

    case "SET_HABITS":
      // localStorage se habits ko load karne ke liye
      return action.habits;
    default:
      return state;
  }
}

export default function HabitTracker() {
  const [habits, dispatch] = useReducer(habitReducer, []);
  const [newHabit, setNewHabit] = useState("");

  // ✅ Mount hone par localStorage se habits fetch karo
  useEffect(() => {
    const stored = localStorage.getItem("habits");
    if (stored) {
      dispatch({ type: "SET_HABITS", habits: JSON.parse(stored) });
    }
  }, []);

  // ✅ Jab bhi habits change ho, localStorage me save karo
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  return (
    <div className="py-4">
      <Card className="p-3 mb-4 shadow-sm">
        <h5 className="mb-3">➕ Add New Habit</h5>
        {/* ✅ Form to add a new habit */}
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            // console.log("Asdasd");
            if (!newHabit.trim()) return;
            dispatch({ type: "ADD_HABITS", name: newHabit });
            setNewHabit("");
          }}
        >
          <Form.Group as={Row} className="mb-3">
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Enter the text..."
                value={newHabit}
                onChange={(e) => setNewHabit(e.target.value)}
              />
            </Col>
            <Col sm={3}>
              <Button type="submit" variant="primary" className="w-100">
                Add Habit
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Card>

      {/* ✅ Table me sab habits list karo */}
      {habits.map((habit) => (
        <Card key={habit.id} className="mb-2">
          <Card.Body>
            <Card.Title>{habit.name}</Card.Title>
            <Table responsive bordered className="text-center mb-0">
              <thead>
                <tr>
                  {days.map((day) => (
                    <th key={day}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {habit.progress.map((done, idx) => (
                    <td
                      key={idx}
                      onClick={() =>
                        dispatch({
                          type: "TOGGLE_PROGRESS",
                          id: habit.id,
                          dayIndex: idx,
                        })
                      }
                      style={{cursor : "pointer"}}
                    >
                      {done ? "✅" : "❌"}
                    </td>
                  ))}
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
