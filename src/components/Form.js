import { Button, Paper, TextField } from "@mui/material";

function Form () {
    return (
        <Paper>
            <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
            <Button variant="text">add</Button>
        </Paper>
    )
}

export default Form;