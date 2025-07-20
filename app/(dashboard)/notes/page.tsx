// import NotesEditor from "@/app/components/notes/NotesEditor";
import NoteList from "@/app/components/notes/NotesList";
import { Container } from "react-bootstrap";

export default function NotesPages() {
 return (
    <Container className="py-5">
         <h2 className="mb-4">📝 Notes Editor</h2>
         <NoteList />
    </Container>
 )   
}