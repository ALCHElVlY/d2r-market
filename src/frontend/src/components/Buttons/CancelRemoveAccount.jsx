// External imports
import { Button } from "@mui/material";

const CancelRemoveAccount = (props) => {
  // Custom button styling
  const ButtonProps = {
    width: "100%",
    height: "32px",
    backgroundColor: "#a10c0d",
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
      backgroundColor: "#eb1011",
    },
  };

  return (
    <Button
      variant="contained"
      sx={ButtonProps}
      disableRipple
      type="submit"
      onClick={props.onClick}>
      <span>Cancel</span>
    </Button>
  );
};

export default CancelRemoveAccount;
