import { Box, Grid2, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";

export default function TodoListForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFieldChange2 = (e) => {
    setNewItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodoList([
      ...todoList,
      {
        id: crypto.randomUUID(),
        title: newItem,
        completed: false,
      },
    ]);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();

    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit2(e);
  };

  return (
    <Box bgcolor="#1A4F76" borderRadius={1} marginBottom={1} padding={1}>
      <Grid2 container spacing={1}>
        <Grid2 size={12}>
          <Typography fontSize={20} color="white">
            New Item
          </Typography>
        </Grid2>
        <Grid2 size={12}>
          <TextField
            size="small"
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: "white", borderRadius: "4px" }}
            value={newItem}
            onChange={handleFieldChange2}
            onKeyDown={handleKeyDown}
          ></TextField>
        </Grid2>
        <Grid2 size={12}>
          <Button
            size="small"
            variant="contained"
            fullWidth
            onClick={(e) => {
              handleSubmit2(e);
            }}
          >
            Add
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
}