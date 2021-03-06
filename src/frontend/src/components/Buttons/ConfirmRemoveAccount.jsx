// External imports
import { Button } from "@mui/material";

const ConfirmRemoveAccount = (props) => {
  // Custom button styling
  const ButtonProps = {
    width: "100%",
    height: "32px",
    backgroundColor: "#0a8f0f",
    fontSize: "14px",
    fontWeight: "400",
    whiteSpace: "nowrap",
    margin: "0 2px",
    padding: ".6rem .75rem",
    border: "1px solid transparent",
    borderRadius: "2px",
    outline: "0",
    boxShadow: "none",
    textAlign: "center",
    lineHeight: "1",
    verticalAlign: "middle",
    curser: "pointer",
    userSelect: "none",

    "&&:hover": {
      backgroundColor: "#0bc412",
    },
  };

  return (
    <Button
      variant="contained"
      sx={ButtonProps}
      disableRipple
      type="submit"
      onClick={props.onClick}>
      <span>Yes, I am sure</span>
    </Button>
  );
};

export default ConfirmRemoveAccount;
