import PomodoroTimer from "@/app/components/pomodoro/PomodoroTimer";
import { Container } from "react-bootstrap";

export default function PomodoroPage(){
    return(
        <Container className="py-5">
            <h1>Pomodoro</h1>
            <PomodoroTimer />
        </Container>
    );
}