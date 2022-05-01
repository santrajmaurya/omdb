import React from "react";
import { Box, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ShowMovie({ openModal, addedMovie, closeModal }) {
  return (
    <div>
      <Modal open={openModal} onClose={closeModal}>
        <Box sx={style}>
          <img
            style={{ maxWidth: "100%", height: 300, width: 400 }}
            src={addedMovie.website}
            alt="imagsse"
          />
          <Typography variant="h6" component="h2">
            {addedMovie.title}
          </Typography>
          <Typography variant="h6" component="h2">
            {addedMovie.year}
          </Typography>
          <Typography variant="h6" component="h2">
            {addedMovie.language}
          </Typography>
          <Typography variant="body2" component="h2">
            {addedMovie.plot}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
