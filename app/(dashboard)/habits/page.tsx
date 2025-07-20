import HabitTracker from "@/app/components/habits/HabitTracker";
import { Container } from "react-bootstrap";

export default function HabitsPage(){
    return (
        <Container className="py-5">
            <h2 className="mb-4">📅 Habit Tracker</h2>
            <HabitTracker />
        </Container>
    );
}