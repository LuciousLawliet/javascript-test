import { Button, Grid2, Typography } from "@mui/material";

export default function TicTacToeController({
  setLock,
  boxes,
  setBoxes,
  setIsNext,
  setXWinning,
  setOWinning,
  setCounter,
  xWinning,
  oWinning,
  isNext,
  counter,
}) {
  const handleReset = () => {
    setBoxes(
      boxes.map((box) => {
        return { ...box, value: "", lock: false };
      })
    );
    setIsNext(true);
    setXWinning(false);
    setOWinning(false);
    setLock(false);
    setCounter(0);
  };

  return (
    <Grid2 container direction="column" alignItems="center">
      <Grid2>
        <Button variant="contained" onClick={() => handleReset()}>
          Reset
        </Button>
      </Grid2>
      <Grid2>
        <Typography color="white" fontSize="50px">
          {xWinning && !oWinning
            ? "Player X Wins"
            : (!xWinning && oWinning && "Player O Wins") ||
              (!xWinning &&
                !oWinning &&
                (isNext && counter < 9
                  ? "Player X turns"
                  : !isNext && counter < 9
                  ? "Player O turns"
                  : "Draw"))}
        </Typography>
      </Grid2>
    </Grid2>
  );
}
