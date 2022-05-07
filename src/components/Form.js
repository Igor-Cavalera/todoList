import { Button, Paper, TextField } from "@mui/material";

function Form () {
    return (
        <Paper style={{ padding: "1em "}}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TextField id="outlined-basic" label="Task" variant="outlined" fullWidth/>
                <Button variant="text">add</Button>
            </div>
        </Paper>
    )
}

export default Form;