import * as React from "react";

import { getPostAsync } from "../features/postsAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CheckIcon from "@mui/icons-material/Check";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { Button } from "@mui/material";

import LinearIndeterminate from "../components/Loading";
import Box from "@mui/material/Box";

export default function AllPost() {
  const { loading, data } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [post, setPost] = React.useState({
    limit: 100,
    offset: 0,
    status: "publish",
  });
  useEffect(() => {
    dispatch(getPostAsync(post));
  }, []);
  useEffect(() => {
    dispatch(getPostAsync(post));
  }, [post]);
  const [value, setValue] = React.useState(0);

  const handlerButton = (event, newValue) => {
    setValue(newValue);
    const status = {
      0: "publish",
      1: "draft",
      2: "thrash",
    };
    setPost({ ...post, status: status[newValue] });
  };
  if (loading) return <LinearIndeterminate />;
  if (data)
    return (
      <Box>
        <Box>
          <BottomNavigation showLabels value={value} onChange={handlerButton}>
            <BottomNavigationAction sx={{ border: 1 }} label={"Published (" + data.counter[0].publishcount + ")"} icon={<CheckIcon />} />
            <BottomNavigationAction sx={{ border: 1 }} label={"Drafts (" + data.counter[0].draftcount + ")"} icon={<DraftsOutlinedIcon />} />
            <BottomNavigationAction sx={{ border: 1 }} label={"Trashed (" + data.counter[0].thrashcount + ")"} icon={<DeleteOutlineOutlinedIcon />} />
          </BottomNavigation>
        </Box>
        <Table sx={{ width: "100px", margin: "auto", mt: 1, width: "90%", border: 2 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.posts.map((e,i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="center" component="th" scope="row">
                    {e.Title}
                  </TableCell>
                  <TableCell align="center">{e.Category}</TableCell>
                  <TableCell align="center">
                    <Button variant="outlined" startIcon={<ModeEditOutlineOutlinedIcon />}>
                      Edit
                    </Button>
                    <Button variant="outlined" startIcon={<DeleteOutlineOutlinedIcon />}>
                      Trash
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    );
}
