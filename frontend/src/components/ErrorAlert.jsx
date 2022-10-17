import React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export default function ErrorAlert() {
  const [open, setOpen] = React.useState(false);
  const error = useSelector((state) => state.error)

  React.useEffect(()=>{
    if(error) setOpen(true)

    setTimeout(()=>{
      setOpen(false);
  },2000)
  },[error])
  
  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {error}
        </Alert>
      </Collapse>
    </Box>
  )
  ;
}
