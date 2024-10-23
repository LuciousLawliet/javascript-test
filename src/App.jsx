import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./Pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import TodoList from "./Components/TodoList/TodoList.jsx";
import DragonList from "./Components/DragonList/DragonList.jsx";
import TicTacToe from "./Components/TicTacToe/TicTacToe.jsx";

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Open sans, sans-serif",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/todo" element={<TodoList />} />
            <Route path="/animal" element={<DragonList />} />
            <Route path="tictactoe" element={<TicTacToe />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}
