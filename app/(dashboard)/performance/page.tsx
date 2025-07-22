import PerformanceDemo from "@/app/components/PerformanceDemo";
import { Container } from "react-bootstrap";

export default function Performance(){
    return (
        <Container className="mb-4">
            <h4 className="mb-3">🎭 Performance</h4>
            <PerformanceDemo />
        </Container>
    )
}