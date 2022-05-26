// External imports
import { Button, Radio, FormControlLabel } from "@mui/material";

const FilterAll = () => {
  // Custom button styling
  const ButtonProps = {
    color: "white",
    backgroundColor: "var(--primary-button-background)",
    textTransform: "none",
    marginRight: "3px",
    height: "30px",

    "&&:hover": {
      backgroundColor: "var(--primary-active-link)",
    },
    "&& .MuiSvgIcon-root": {
      fontSize: "18px",
    },
  };

  // Custom radio button styling
  const RadioProps = {
    color: "white",
    "&.Mui-checked": {
      color: "white",
    },
  };

  return (
    <Button variant="contained"
	size="small"
	sx={ButtonProps}
	disableRipple>
      <FormControlLabel
        value="filterAll"
        control={<Radio sx={RadioProps} disableRipple />}
        label="All"
      />
    </Button>
  );
};

export default FilterAll;
