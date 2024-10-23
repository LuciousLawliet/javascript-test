import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const navLists = [
    {
      id: "1",
      navName: "HOME",
      path: " ",
    },
    {
      id: "2",
      navName: "TODO LIST",
      path: "todo",
    },
    {
      id: "3",
      navName: "ANIMAL LIST",
      path: "animal",
    },
    {
      id: "4",
      navName: "TIC TAC TOE",
      path: "tictactoe",
    },
  ];

  const handleOnClickNav = (path) => {
    navigate(`/${path}`);
  };

  return (
    <>
      <List>
        <Box bgcolor="#1A4F76">
          <Stack direction="row">
            {navLists.map((navList) => {
              return (
                <ListItem
                  disablePadding
                  key={navList.id}
                  sx={{ alignItems: "center" }}
                >
                  <ListItemButton
                    onClick={() => handleOnClickNav(navList.path)}
                  >
                    <ListItemText sx={{ textAlign: "center" }}>
                      <Typography fontSize={18} color="white">
                        {navList.navName}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </Stack>
        </Box>
      </List>
      <Outlet />
      <Box bgcolor="#1A4F76" marginTop={1} padding={1} bottom={0}>
        <Typography fontSize={13} textAlign="center" color="white" >Copyright © Fadel Irham.</Typography>
      </Box>
    </>
  );
}
