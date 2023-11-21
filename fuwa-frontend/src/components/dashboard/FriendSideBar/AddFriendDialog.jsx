import { useState, useEffect } from "react";
import { validateMail } from "../../shared/utils/validator";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import InputBox from "../../shared/components/InputBox";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import { sendFriendInvitation } from "../../../store/slices/friendsSlice";
import { useDispatch } from "react-redux";

const AddFriendDialog = ({ isDialogOpen, closeDialogHandler }) => {
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();

  const handleSendInvitation = () => {
    dispatch(
      sendFriendInvitation(
        {
          targetMail: mail,
        },
        closeDialogHandler
      )
    );
    setMail("");
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter e-mail address of friend which you would like to invite
          </DialogContentText>
          <InputBox
            label="Mail"
            type="text"
            value={mail}
            setValue={setMail}
            placeholder="Enter email address"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            label="Send"
            disabled={!isFormValid}
            onClick={handleSendInvitation}
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddFriendDialog;
