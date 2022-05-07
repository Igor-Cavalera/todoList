import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import { Container , List } from "@mui/material";

function Home () {
    return (
        <Container maxWidth="xs" style={{ marginTop: "1em" }}>
        <Form />
            <List sx={{ bgcolor: "background.paper", marginTop: "1em" }}> 
                <TodoItem />
            </List>
        </Container>
    )
}

export default Home;