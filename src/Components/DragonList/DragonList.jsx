import {
  Box,
  Button,
  Grid2,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function DragonList() {
  const coloumns = [
    { id: "no", label: "No" },
    { id: "species", label: "Species", align: "center" },
    { id: "element", label: "Element", align: "center" },
    {
      id: "power",
      label: "Power",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
  ];

  const createData = (no, species, element, power) => {
    return { no, species, element, power };
  };

  const [rows, setRows] = useState([
    {
      no: "1",
      species: "Earth Dragon",
      element: "Earth",
      power: 444444,
    },
    {
      no: "2",
      species: "Dark Dragon",
      element: "Darkness",
      power: 777777,
    },
  ]);

  const DragonTable = () => {
    const [dSpecies, setDSpecies] = useState("");
    const [dElement, setDElement] = useState("");
    const [dPower, setDPower] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const addDragon = (species, element, power) => {
      setRows((currentRows) => {
        return [
          ...currentRows,
          {
            no: Math.floor(Number(rows[rows.length - 1].no) + 1),
            species,
            element,
            power,
          },
        ];
      });
    };

    const handleOnSubmit = (e) => {
      e.preventDefault();

      //if (dSpecies || dElement || dPower === "") return;

      addDragon(
        dSpecies,
        dElement,
        dPower.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );

      setDSpecies("");
      setDElement("");
      setDPower("");
    };

    return (
      <>
          <Grid2 container spacing={1} marginBottom={5}>
            <Grid2 size={12}>
              <Typography fontSize={25} color="white" textAlign="center">
                New Dragon
              </Typography>
            </Grid2>
            <Grid2 size={4}>
              <TextField
                size="medium"
                variant="filled"
                fullWidth
                label="Species"
                sx={{ backgroundColor: "white", borderRadius: "4px" }}
                value={dSpecies}
                onChange={(e) => setDSpecies(e.target.value)}
                //onKeyDown={handleKeyDown}
              ></TextField>
            </Grid2>
            <Grid2 size={4}>
              <TextField
                size="medium"
                variant="filled"
                fullWidth
                label="Element"
                sx={{ backgroundColor: "white", borderRadius: "4px" }}
                value={dElement}
                onChange={(e) => setDElement(e.target.value)}
                //onKeyDown={handleKeyDown}
              ></TextField>
            </Grid2>
            <Grid2 size={4}>
              <TextField
                size="medium"
                variant="filled"
                fullWidth
                label="Power"
                sx={{ backgroundColor: "white", borderRadius: "4px" }}
                value={dPower}
                onChange={(e) => setDPower(e.target.value)}
                //onKeyDown={handleKeyDown}
              ></TextField>
            </Grid2>
            <Grid2 size={12}>
              <Button
                size="medium"
                variant="contained"
                fullWidth
                onClick={(e) => {
                  handleOnSubmit(e);
                }}
              >
                Add
              </Button>
            </Grid2>
          </Grid2>        
        <Paper
          sx={{ height: "100%", width: "100%", overflow: "hidden", backgroundColor: "#DEF1FA" }}
        >
          <TableContainer sx={{ maxHeight: 500 }}>
            <Table>
              <TableHead sx={{ backgroundColor: "#3583C3" }}>
                <TableRow>
                  {coloumns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      sx={{ color: "white", fontSize: "20px" }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        key={row.no}
                        hover
                        role="checkbox"
                        tabIndex={-1}
                      >
                        {coloumns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </>
    );
  };

  return (
    <Box bgcolor="#1A4F76"
    paddingTop={0}
    paddingBottom={3}
    paddingLeft={3}
    paddingRight={3}
    minHeight="800px"
    height="100%"
    >
      <DragonTable />
    </Box>
  );
}
