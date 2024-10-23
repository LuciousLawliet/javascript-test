import { Box, Grid2, Typography, List } from "@mui/material";
import { TodoItemsRender } from "./TodoItemsRender.jsx";

export default function TodoItems({ todoList, handleCheck, handleDelete }) {
  return (
    <Box bgcolor="#1A4F76" borderRadius={1} padding={1}>
      <Grid2 container spacing={0}>
        <Grid2 size={12}>
          <Typography fontSize={20} color="white">
            Todo List
          </Typography>
        </Grid2>
        {todoList.length === 0 && (
          <Typography fontSize={15} color="white">
            No Todos
          </Typography>
        )}
        <List disablePadding>
          {todoList.map((todo) => {
            return (
              <TodoItemsRender
                // {...todo}
                key={todo.id}
                id={todo.id}
                completed={todo.completed}
                title={todo.title}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            );
          })}
        </List>
      </Grid2>
    </Box>
  );
}
