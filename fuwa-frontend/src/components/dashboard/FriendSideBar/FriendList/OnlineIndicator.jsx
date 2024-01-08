import Box from "@mui/material/Box";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const OnlineIndicator = () => {
  return (
    <Box
      sx={{
        color: "#3ba55d",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        right: "5px",
      }}
    >
      <FiberManualRecordIcon sx={{ height: 15, width: 15 }} />
    </Box>
  );
};

export default OnlineIndicator;
