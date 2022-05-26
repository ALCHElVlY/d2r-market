// Builtin imports
import { useEffect, useState } from "react";

// Import UI components
import { mdiNintendoSwitch } from "@mdi/js";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Icon,
  createSvgIcon,
} from "@mui/material";
import { loadCSS } from "fg-loadcss";

const PlatformSelector = () => {
  // State variables
  const [platform, setPlatform] = useState(1);
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

  // Use the material UI method createSvgIcon to create
  // a custom icon for the nintendo-switch logo
  const CustomSwitchIcon = createSvgIcon(
    <path d={mdiNintendoSwitch} />,
    "nintendo-switch",
  );

  // Custom prop styling
  const SelectProps = {
    color: "#a53f49",
    fontSize: "24px",
    fontWeight: "bold",
    position: "relative",
    top: "-6px",
    paddingLeft: "10px",

    /* Apply styling to the icon */
    "&& .MuiSvgIcon-root": {
      color: "#a53f49",
    },
  };
  const MenuItemProps = {
    color: "#a53f49",
    backgroundColor: "#2c2f31",
    fontWeight: "fontWeightBold",
  };

  // Array of platform objects
  const platforms = [
    {
      code: "1",
      label: "PC",
      image: null,
    },
    {
      code: "2",
      label: "Xbox",
      image: (
        <Icon
          baseClassName="fab"
          className="fa-xbox"
          sx={{
            color: "#a53f49",
            fontSize: "17px",
          }}
        />
      ),
    },
    {
      code: "3",
      label: "PlayStation",
      image: (
        <Icon
          baseClassName="fab"
          className="fa-playstation"
          sx={{
            color: "#a53f49",
            fontSize: "17px",
          }}
        />
      ),
    },
    {
      code: "4",
      label: "Switch",
      image: (
        <CustomSwitchIcon
          sx={{
            color: "#a53f49",
            fontSize: "17px",
          }}
        />
      ),
    },
  ];

  // Event handlers
  const handleChange = (e) => {
    setPlatform(e.target.value);
  };
  const handlePopoverOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(false);
  };

  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
      // Inject before JSS
      // eslint-disable-next-line no-undef
      document.querySelector("#font-awesome-css") || document.head.firstChild,
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <FormControl variant="standard" sx={{ width: "auto" }}>
      <InputLabel id="platform-selector-standard-label" />
      <Select
        labelId="platform-selector-standard-label"
        id="platform-selector-standard"
        autoWidth
        value={platform}
        onChange={handleChange}
        onMouseEnter={handlePopoverOpen}
        open={open}
        onClose={handlePopoverClose}
        label="Platform"
        sx={SelectProps}
        MenuProps={{
          MenuListProps: {
            disablePadding: true,
            onMouseLeave: handlePopoverClose,
          },
        }}
        disableUnderline>
        {platforms.map((p) => {
          return (
            <MenuItem sx={MenuItemProps} value={p.code} key={p.code}>
              {p.image} {p.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default PlatformSelector;
