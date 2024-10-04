import { ListItem } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Create from '@mui/icons-material/Create'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import './TodoForm.css'

export default function TodoForm({addTodo}) {
    const [text, setText] = useState("");
    const handleChnage = (evt) => {
        setText(evt.target.value)
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        addTodo(text);
        setText("")
    }
    return (
        <ListItem>
            <form onSubmit={handleSubmit} className="FormStyle" >
                <TextField
                    id="outlined-basic"
                    label="Add Todo"
                    variant="outlined"
                    onChange={handleChnage}
                    value={text}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                                type="submit"
                            >
                                <Create/>
                            </IconButton>
                        </InputAdornment>
                    }}

                />
            </form>
        </ListItem>
    );

}