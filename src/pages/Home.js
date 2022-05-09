import Form from "../components/Form";
import TodoItem from "../components/TodoItem";
import { Container , List } from "@mui/material";
import { useState } from "react";

function Home () {
    const [todos, setTodos] = useState([]);

    const todoHandler = (todo) => {
        setTodos([...todos, todo]);
    };

    return (
        <Container maxWidth="xs" style={{ marginTop: "1em" }}>
        <Form todoHandler={todoHandler} />
            <List sx={{ marginTop: "1em" }}> 
                {todos.map((todo) => (
                   <div key={todo.id} style={{ marginTop: "1em" }}>
                       <TodoItem todo={todo} />
                   </div>
                ))}
            </List>
        </Container>
    )
}

export default Home;