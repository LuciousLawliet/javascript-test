import { ListItem, FormControlLabel, Checkbox, Button } from "@mui/material";

export function TodoItemsRender({
  completed,
  id,
  title,
  handleCheck,
  handleDelete,
}) {
  return (
    <ListItem key={id}>
      <FormControlLabel
        control={
          <Checkbox
            checked={completed}
            onChange={(e) => handleCheck(id, e.target.checked)}
            sx={{ color: "white" }}
          />
        }
        label={title}
        sx={{ color: "white" }}
      />
      <Button
        variant="contained"
        color="warning"
        onClick={() => handleDelete(id)}
      >
        Delete
      </Button>
    </ListItem>
  );
}
