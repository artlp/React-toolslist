import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useEffect } from "react";
import CollectionSave from "../../Assets/Images/Collection-save.png";

export default function PositionedSnackbar({ showSnackbar, setShowSnackbar }) {
  const handleClose = () => {
    setShowSnackbar(false);
  };

  useEffect(() => {
    if (showSnackbar) {
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
    }
  }, [setShowSnackbar, showSnackbar]);

  return (
    <div>
      <Snackbar
        className="collection-saved-notification"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={showSnackbar}
        onClose={handleClose}
        message={
          <>
            <img src={CollectionSave} alt=""></img> <p>Saved to collection</p>
          </>
        }
      />
    </div>
  );
}
