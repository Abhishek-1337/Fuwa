import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { alertActions } from "../../../store/slices/alertSlice";

const AlertNotification = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  return (
    // Component is known as toast
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={alert.showAlertMessage}
      onClose={() => {
        dispatch(alertActions.closeAlertMessage());
      }}
      autoHideDuration={6000}
    >
      <Alert severity="info">{alert.alertMessageContent}</Alert>
    </Snackbar>
  );
};

export default AlertNotification;
