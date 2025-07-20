
import TipFetcher from "@/app/components/tips/TipFetcher";
import { Container } from "react-bootstrap";

export default function Tips(){
    return(
        <Container className="py-5">
            <h2 className="mb-4">💡 Productivity Tips</h2>
            <TipFetcher />
        </Container>
    )
}