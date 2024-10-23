import { Box, Button, Grid2, ListItemButton, Typography } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useEffect, useState } from "react";
import TicTacToeBoard from "./TicTacToeBoard";
import TicTacToeController from "./TicTacToeController";

export default function TicTacToe() {
  const [boxes, setBoxes] = useState([
    {
      id: "1",
      value: "",
      lock: false,
    },
    {
      id: "2",
      value: "",
      lock: false,
    },
    {
      id: "3",
      value: "",
      lock: false,
    },
    {
      id: "4",
      value: "",
      lock: false,
    },
    {
      id: "5",
      value: "",
      lock: false,
    },
    {
      id: "6",
      value: "",
      lock: false,
    },
    {
      id: "7",
      value: "",
      lock: false,
    },
    {
      id: "8",
      value: "",
      lock: false,
    },
    {
      id: "9",
      value: "",
      lock: false,
    },
  ]);
  const [isNext, setIsNext] = useState(true);
  const [xWinning, setXWinning] = useState(false);
  const [oWinning, setOWinning] = useState(false);
  const [lock, setLock] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (
      boxes[0].value === "X" &&
      boxes[1].value === "X" &&
      boxes[2].value === "X"
    ) {
      setXWinning(true);
      setLock(true);
    } else if (
      boxes[0].value === "X" &&
      boxes[3].value === "X" &&
      boxes[6].value === "X"
    ) {
      setXWinning(true);
      setLock(true);
    } else if (
      boxes[0].value === "X" &&
      boxes[4].value === "X" &&
      boxes[8].value === "X"
    ) {
      setXWinning(true);
      setLock(true);
    } else if (
      boxes[1].value === "X" &&
      boxes[4].value === "X" &&
      boxes[7].value === "X"
    ) {
      setXWinning(true);
      setLock(true);
    } else if (
      boxes[2].value === "X" &&
      boxes[5].value === "X" &&
      boxes[8].value === "X"
    ) {
      setXWinning(true);
      setLock(true);
    } else if (
      boxes[2].value === "X" &&
      boxes[4].value === "X" &&
      boxes[6].value === "X"
    ) {
      setXWinning(true);
      setLock(true);
    } else if (
      boxes[3].value === "X" &&
      boxes[4].value === "X" &&
      boxes[5].value === "X"
    ) {
      setXWinning(true);
      setLock(true);
    } else if (
      boxes[6].value === "X" &&
      boxes[7].value === "X" &&
      boxes[8].value === "X"
    ) {
      setXWinning(true);
      setLock(true);
    } else if (
      boxes[0].value === "O" &&
      boxes[1].value === "O" &&
      boxes[2].value === "O"
    ) {
      setOWinning(true);
      setLock(true);
    } else if (
      boxes[0].value === "O" &&
      boxes[3].value === "O" &&
      boxes[6].value === "O"
    ) {
      setOWinning(true);
      setLock(true);
    } else if (
      boxes[0].value === "O" &&
      boxes[4].value === "O" &&
      boxes[8].value === "O"
    ) {
      setOWinning(true);
      setLock(true);
    } else if (
      boxes[1].value === "O" &&
      boxes[4].value === "O" &&
      boxes[7].value === "O"
    ) {
      setOWinning(true);
      setLock(true);
    } else if (
      boxes[2].value === "O" &&
      boxes[5].value === "O" &&
      boxes[8].value === "O"
    ) {
      setOWinning(true);
      setLock(true);
    } else if (
      boxes[2].value === "O" &&
      boxes[4].value === "O" &&
      boxes[6].value === "O"
    ) {
      setOWinning(true);
      setLock(true);
    } else if (
      boxes[3].value === "O" &&
      boxes[4].value === "O" &&
      boxes[5].value === "O"
    ) {
      setOWinning(true);
      setLock(true);
    } else if (
      boxes[6].value === "O" &&
      boxes[7].value === "O" &&
      boxes[8].value === "O"
    ) {
      setOWinning(true);
      setLock(true);
    } else {
      setXWinning(false);
      setOWinning(false);
    }
  }, [boxes]);

  return (
    <Box bgcolor="#1A4F76" padding={3} justifyItems="center">
      <Grid2 container direction="column" spacing={3} alignItems="center">
        <TicTacToeBoard
          boxes={boxes}
          setBoxes={setBoxes}
          setCounter={setCounter}
          setIsNext={setIsNext}
          lock={lock}
          isNext={isNext}
          counter={counter}
        />
        <TicTacToeController
          boxes={boxes}
          setBoxes={setBoxes}
          setCounter={setCounter}
          setIsNext={setIsNext}
          setLock={setLock}
          setOWinning={setOWinning}
          setXWinning={setXWinning}
          xWinning={xWinning}
          oWinning={oWinning}
          isNext={isNext}
          counter={counter}
        />
      </Grid2>
    </Box>
  );
}
