// Built-in imports
import { useEffect, useRef } from "react";

// External imports
import { Button } from "@mui/material";

const LinkAccount = (props) => {
  // Reference variables
  const buttonRef = useRef(null);

  // Custom button styling
  const ButtonProps = {
    flexBasis: "30%",
    height: "36px",
    backgroundColor: "var(--primary-button-background)",
    fontSize: "14px",
    fontWeight: "400",
    whiteSpace: "nowrap",
    marginRight: "0 2px",
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
      backgroundColor: "var(--primary-button-background_lighter)",
    },
  };

  // React hook to handle adding the disabled button class
  useEffect(() => {
    if (props.isDisabled) {
      buttonRef.current.classList.add("disabled_button");
    }
  }, [props]);

  return (
    <Button
      variant="contained"
      sx={ButtonProps}
      className="link_account"
      ref={buttonRef}
      disableRipple
      type="submit"
      onClick={props.onClick}>
      <span>Link account</span>
    </Button>
  );
};

export default LinkAccount;
