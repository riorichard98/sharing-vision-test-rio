import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
export default function AddPost() {
  const [data, setData] = React.useState({
    title: "",
    category: "",
    content: ""
  });
  const draftButton = (e) =>{
    e.preventDefault()
    console.log({...data,status:'draft'});
  }
  const publishButton = (e) =>{
    e.preventDefault()
    console.log({...data,status:'publish'});
  }
  return (
    <Box component="form">
      <Box>
        <TextField
          onChange={(e) => {
            setData({ ...data, title: e.target.value });
          }}
          required
          label="Title"
          sx={{ mr: 2 }}
        />
        <TextField
          onChange={(e) => {
            setData({ ...data, category: e.target.value });
          }}
          required
          label="Category"
        />
      </Box>
      <Box>
        <TextField
          onChange={(e) => {
            setData({ ...data, content: e.target.value });
          }}
          required
          label="Content"
          rows={15}
          multiline
          fullWidth
          sx={{ mt: 2 }}
        />
      </Box>
      <Box align="center" sx={{ mt: 2 }}>
        <Button onClick={publishButton} startIcon={<PublishOutlinedIcon />} sx={{ border: 1, mr: 2 }}>
          Publish
        </Button>
        <Button onClick={draftButton} startIcon={<DraftsOutlinedIcon />} sx={{ border: 1 }}>
          Draft
        </Button>
      </Box>
    </Box>
  );
}
