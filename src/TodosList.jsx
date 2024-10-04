import List from '@mui/material/List';
import TodoItem from './TodoItem';
import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const initialData = () => {
    const data = JSON.parse(localStorage.getItem("Todos"));
    if (!data) {
        return [];
    }
    else {
        return data;
    }
}
export default function TodosList() {
    const [todos, setTodos] = useState(initialData);
    useEffect(() => {
        localStorage.setItem("Todos", JSON.stringify(todos))
    }, [todos])
    const removeTodo = (id) => {
        setTodos(previous => {
            return previous.filter(t => t.id !== id)
        })
    }
    const toggleTodo = (id) => {
        setTodos(previousToggle => {
            return previousToggle.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                else {
                    return todo;
                }
            });
        })
    }
    const addTodo = (text) => {
        setTodos(previousTodo => {
            return [...previousTodo, { id: crypto.randomUUID(), text: text, completed: false }]
        })
    }
    return (
        <Box sx={{
            border: "2px solid black",
            borderRadius:"50px",
           
            backgroundColor: "#e8eaed",
            display:"flex",
            flexDirection: "column",
            alignItems:"center",
            m:3,

        }}>
            <Typography variant="h4" component="h2" sx={{ flexGrow: 1 }}>
                 Todos- List
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map(todo => {
                    return (
                        <TodoItem todo={todo} key={todo.id} removeTodo={() => removeTodo(todo.id)} toggleTodo={() => toggleTodo(todo.id)} />
                    );
                })}
                <TodoForm addTodo={addTodo} />
            </List>
        </Box>
    );

}




