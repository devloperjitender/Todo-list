
import './App.css';
import CssBaseline from '@mui/material/CssBaseline'
import TodosList from './TodosList';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <CssBaseline />
      <TodosList />
    </div>
  );
}

export default App;
