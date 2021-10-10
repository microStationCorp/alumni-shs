import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useRouter } from "next/router";

export default function CustomDialog({
  dialogOpen,
  loading,
  errorType,
  alertMsg,
  handleDialogClose,
  clearAllField,
}) {
  const router = useRouter();
  return (
    <Dialog open={dialogOpen} onClose={handleDialogClose} disableEscapeKeyDown>
      {loading ? (
        <DialogTitle id="alert-dialog-title">{"Loading..."}</DialogTitle>
      ) : (
        <>
          {errorType === "error" ? (
            // if error
            <>
              <DialogTitle id="alert-dialog-title">
                <ErrorOutlineIcon color="error" fontSize="inherit" />
                <Typography variant="h6" component="span" color="error">
                  {"Error"}
                </Typography>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {alertMsg}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleDialogClose}>Ok</Button>
              </DialogActions>
            </>
          ) : (
            // if submitted
            <>
              <DialogTitle id="alert-dialog-title">
                <CheckCircleOutlineIcon fontSize="inherit" color="success" />{" "}
                <Typography variant="h6" component="span" color="secondary">
                  {"Submitted"}
                </Typography>
              </DialogTitle>
              <DialogActions>
                <Button onClick={() => router.push("/")}>Go to Homepage</Button>
                <Button
                  onClick={() => {
                    clearAllField();
                    handleDialogClose();
                  }}
                >
                  Add Another
                </Button>
              </DialogActions>
            </>
          )}
        </>
      )}
    </Dialog>
  );
}
