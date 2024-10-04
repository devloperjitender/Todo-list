import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';


import ListItem from '@mui/material/ListItem';
export default function TodoItem({ todo, removeTodo, toggleTodo }) {
    const labelId = `checkbox-list-label-${todo.id}`;
    return (
        <Box sx={{
           
           backgroundColor: "white",
           fontFamily:"Arial",
           fontSize:"40px",
           mb:"10px"
        }}>
            <ListItem

                secondaryAction={
                    <Grid container sx={{ color: 'text.primary' }} onClick={removeTodo}>

                        <Grid item xs={8}>
                            <DeleteIcon />

                        </Grid>
                    </Grid>
                }
                disablePadding
            >
                <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={todo.completed}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                            onClick={toggleTodo}

                        />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={todo.text} />
                </ListItemButton>
            </ListItem>
        </Box>
    );
}