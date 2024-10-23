import { Box, Grid2, ListItemButton, Typography } from "@mui/material";

export default function TicTacToeBoard({
  boxes,
  setBoxes,
  setIsNext,
  setCounter,
  lock,
  isNext,
  counter,
}) {
  const handleOnClick = (id) => {
    setBoxes(
      boxes.map((box) => {
        if (box.id === id && isNext) {
          return { ...box, value: "X", lock: true };
        } else if (box.id === id && !isNext) {
          return { ...box, value: "O", lock: true };
        } else {
          return box;
        }
      })
    );
    setIsNext(!isNext);
    setCounter(counter + 1);
  };

  return (
    <>
      <Grid2>
        <Typography color="white" fontSize={25}>
          Tic Tac Toe
        </Typography>
      </Grid2>
      <Grid2>
        <Grid2 container direction="row" maxWidth={310} spacing={1}>
          {boxes.map((box) => (
            <Grid2 size={4} key={box.id}>
              <Box height={100} width={100} bgcolor="white">
                <ListItemButton
                  disabled={box.lock || lock}
                  onClick={() => handleOnClick(box.id)}
                  sx={{
                    width: "100%",
                    height: "100%",
                    fontSize: "40px",
                    fontWeight: "700",
                    justifyContent: "center",
                  }}
                >
                  {box.value}
                </ListItemButton>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </>
  );
}
