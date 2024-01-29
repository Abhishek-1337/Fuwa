import * as React from "react";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { logout } from "../../shared/utils/auth";
import { useSelector, useDispatch } from "react-redux";
import { roomActions } from "../../../store/slices/roomSlice";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const audioOnly = useSelector((state) => state.room.audioOnly);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);

  // console.log(room);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleAudioOnlyStatus = () => {
    const value = audioOnly ? false : true;
    dispatch(roomActions.setAudioOnly(value));
  };

  return (
    <div>
      <IconButton style={{ color: "white" }} onClick={handleOpenMenu}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
        <MenuItem onClick={handleAudioOnlyStatus}>
          {audioOnly ? "Audio only enabled" : "Audio only disabled"}
        </MenuItem>
      </Menu>
    </div>
  );
}
